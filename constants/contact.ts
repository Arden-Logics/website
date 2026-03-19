/**
 * Centralized contact information for Arden 360.
 * Update these values to keep phone, email, and addresses consistent across the site.
 */

export const SITE_URL = 'https://arden360.com'

export const CONTACT = {
  /** Main phone (no formatting for tel: links) */
  phone: '8563359895',
  /** Display phone (with formatting) */
  phoneDisplay: '856-335-9895',
  /** General / info email */
  email: 'info@arden360.com',
  /** Sales email */
  salesEmail: 'sales@arden360.com',
  /** Portal URL */
  portalUrl: 'https://portal.arden360.com/login',
} as const

export const SOCIAL = {
  facebook: 'https://www.facebook.com/junipertechnology',
  linkedin: 'https://www.linkedin.com/company/arden360/?viewAsMember=true',
} as const
