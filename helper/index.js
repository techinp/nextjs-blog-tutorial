export const setStaticPathWithMultiLanguage = (data, slug, param, locales) => {
  const paths = data
    .map((value) => {
      return locales.map((locale) => {
        return {
          params: {
            [`${param}`]: value[slug].replace(' ', '-').toLowerCase(),
          },
          locale,
        };
      });
    })
    .flat();

  return paths;
};
