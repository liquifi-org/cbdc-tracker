export const getUrlHostname = (url) => {
  try {
    return new URL(url).hostname
  } catch (e) {
    console.error('Error in getUrlHostname ', 'url: "', url, '" error: ', e)
    return ''
  }
}
