/**
 * Facebook Pixel helper functions
 * Use these functions to track custom events throughout the application
 */

declare global {
  interface Window {
    fbq: (
      action: "track" | "trackCustom",
      eventName: string,
      data?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Track a custom event with Facebook Pixel
 * @param eventName - Name of the event to track
 * @param data - Optional data to send with the event
 */
export function trackEvent(
  eventName: string,
  data?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, data);
  }
}

/**
 * Track a custom event with Facebook Pixel
 * @param eventName - Name of the custom event to track
 * @param data - Optional data to send with the event
 */
export function trackCustomEvent(
  eventName: string,
  data?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, data);
  }
}

/**
 * Common event tracking functions
 */
export const facebookPixel = {
  /**
   * Track when a user clicks on a CTA button
   */
  trackCTAClick: (buttonName: string, location?: string) => {
    trackCustomEvent("CTA_Click", {
      button_name: buttonName,
      location: location || "unknown",
    });
  },

  /**
   * Track when a user clicks on a link
   */
  trackLinkClick: (linkUrl: string, linkText?: string) => {
    trackCustomEvent("Link_Click", {
      link_url: linkUrl,
      link_text: linkText,
    });
  },

  /**
   * Track when a user views a specific section
   */
  trackSectionView: (sectionName: string) => {
    trackCustomEvent("Section_View", {
      section_name: sectionName,
    });
  },

  /**
   * Track form submissions
   */
  trackFormSubmit: (formName: string) => {
    trackEvent("Lead", {
      content_name: formName,
    });
  },
};
