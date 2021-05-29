module.exports = (prefix = 'src/app') => ({
  '@services': `${prefix}/services`,
  '@utils': `${prefix}/utils`,
  '@screens': `${prefix}/screens`,
  '@images': `${prefix}/assets/images`,
  '@common': `${prefix}/components/common`,
  '@constants': `${prefix}/constants`,
  '@navigators': `${prefix}/navigators`,
  '@queries': `${prefix}/hooks/queries`,
  '@mutations': `${prefix}/hooks/mutations`,
  '@contexts': `${prefix}/hooks/contexts`,
});
