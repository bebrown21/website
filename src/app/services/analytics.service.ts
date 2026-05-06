import { Injectable } from '@angular/core';
import { getApp } from 'firebase/app';
import {
  Analytics,
  getAnalytics,
  isSupported,
  logEvent as firebaseLogEvent,
} from 'firebase/analytics';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly analyticsPromise: Promise<Analytics | null>;

  constructor() {
    this.analyticsPromise = isSupported()
      .then((supported) => (supported ? getAnalytics(getApp()) : null))
      .catch(() => null);
  }

  logEvent(
    eventName: string,
    eventParams?: Record<string, string | number | boolean>
  ): void {
    void this.analyticsPromise.then((analytics) => {
      if (!analytics) {
        return;
      }

      firebaseLogEvent(analytics, eventName, eventParams);
    });
  }
}
