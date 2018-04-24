export function getBreakpoint(context) {
  if (!context.$vuetify || !context.$vuetify.breakpoint) {
    throw new Error('"Vuetify" library should be attached to context!');
  }
  return context.$vuetify.breakpoint;
}
