const react_i18next = jest.genMockFromModule('react-i18next')

react_i18next.useTranslation = () => ({
    t: key => key,
})

module.exports = react_i18next;