/**
 * Analytics Integration
 * Centralized analytics tracking for conversion events and user interactions
 * Ready for Segment integration or other analytics providers
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  userId?: string;
  timestamp?: Date;
}

class AnalyticsManager {
  private isInitialized = false;
  private provider: 'segment' | 'custom' | null = null;

  /**
   * Initialize analytics - configure when Segment is ready
   */
  init(provider: 'segment' | 'custom' = 'custom') {
    this.provider = provider;
    this.isInitialized = true;

    if (typeof window !== 'undefined' && provider === 'segment') {
      // Segment will be loaded via npm package when configured
      // This is a placeholder for future integration
      console.debug('[Analytics] Segment ready for integration');
    }
  }

  /**
   * Track conversion events (CTAs, signups, etc.)
   */
  trackConversion(eventName: string, properties?: Record<string, any>) {
    this.trackEvent({
      name: `conversion_${eventName}`,
      properties: {
        ...properties,
        type: 'conversion',
      },
    });
  }

  /**
   * Track engagement events (button clicks, section views, etc.)
   */
  trackEngagement(eventName: string, properties?: Record<string, any>) {
    this.trackEvent({
      name: `engagement_${eventName}`,
      properties: {
        ...properties,
        type: 'engagement',
      },
    });
  }

  /**
   * Track ROI calculator interactions
   */
  trackCalculatorInteraction(investmentAmount: number, projectedReturn: number) {
    this.trackEvent({
      name: 'calculator_interaction',
      properties: {
        investment_amount: investmentAmount,
        projected_return: projectedReturn,
        roi_percentage: Math.round((projectedReturn / investmentAmount) * 100),
        type: 'calculator',
      },
    });
  }

  /**
   * Track geo-location (for region-specific analytics like GetStake)
   */
  trackGeoLocation(region: string) {
    this.trackEvent({
      name: 'geo_location',
      properties: {
        region,
        timestamp: new Date(),
      },
    });
  }

  /**
   * Generic event tracking
   */
  trackEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) {
      console.debug('[Analytics] Not initialized, queueing event:', event);
      return;
    }

    // Custom implementation for now
    this.sendEvent(event);
  }

  /**
   * Send event to provider
   */
  private sendEvent(event: AnalyticsEvent) {
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.debug('[Analytics Event]', event.name, event.properties);
    }

    // TODO: Send to Segment or other provider
    // if (this.provider === 'segment' && typeof window !== 'undefined' && 'analytics' in window) {
    //   (window as any).analytics.track(event.name, event.properties);
    // }
  }

  /**
   * Identify user for personalization
   */
  identifyUser(userId: string, traits?: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
      console.debug('[Analytics] User identified:', userId, traits);
    }

    // TODO: Send to Segment
    // if (typeof window !== 'undefined' && 'analytics' in window) {
    //   (window as any).analytics.identify(userId, traits);
    // }
  }

  /**
   * Track page view
   */
  trackPageView(pageName: string, properties?: Record<string, any>) {
    this.trackEvent({
      name: 'page_view',
      properties: {
        page_name: pageName,
        ...properties,
      },
    });
  }
}

// Export singleton instance
export const analytics = new AnalyticsManager();

// Initialize on load
if (typeof window !== 'undefined') {
  analytics.init('custom');
}
