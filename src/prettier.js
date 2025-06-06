// Prettier is opinionated about how to format your code. It enforces consistent, automatic syntactic formatting, and integrates very well with ESLint.
// There are ESLint plugins that add support for Prettier to ESLint, such as eslint-plugin-prettier - allowing Prettier to be run as an ESLint rule.

/* eslint-disable */

  // before - shorter, but honestly, how legible is this? Why not just put it on one line at this point.
setUserMenuOptions([
    {id: "vacations", label: t("common.label.vacations"), icon: <LuggageIcon />, onClick: () => navigateTo(isAdminUser() ? PATHS.VACATIONS_ADMIN : PATHS.VACATIONS_UPCOMING, "My Vacations", "sidepanel"), align: "top", isVisible: isLoggedIn && !isGuestUser(), variant: "primary"},
    {id: "rewards", label: t("profile.points_rewards.title"), icon: <ReceiptIcon />, onClick: () => navigateTo(PATHS.REWARDS_POINTS), align: "top", isVisible: isLoggedIn && !isTrialUser(), variant: "primary"},
    {id: "settings", label: t("profile.account_settings.title"), icon: <UserSettingsIcon />, onClick: () => navigateTo(PATHS.ACCOUNT_SETTINGS, "Account Settings", "sidepanel"), align: "top", isVisible: isLoggedIn, variant: "primary"},
    {id: "files", label: t("profile.payment_documents.title"), icon: <DocumentIcon />, onClick: () => navigateTo(PATHS.USER_FILES), align: "top", isVisible: isLoggedIn && !areFilesDisabled, variant: "primary"},
    {id: "refer_friend", label: t("common.label.refer_friend"), icon: <TravelerIcon />, onClick: () => onReferFriendClick(), align: "top", isVisible: isLoggedIn && !isReferralDisabled, variant: "primary", className: !showNewMarketplace ? styles.marginBottom2 : ""},
    {id: "shop", label: t(isTrialUser() ? "common.label.shop_trial" : "marketplace.title"), icon: <ShopIcon />, onClick: () => navigateTo(PATHS.SHOP), align: "top", isVisible: isLoggedIn && showNewMarketplace, variant: "primary", className: styles.marginBottom2},
    {id: "destinations", label: capitalize(t("common.label.destinations")), onClick: () => navigateTo(PATHS.DESTINATIONS, "Destinations", "sidepanel"), align: "top", isVisible: (isMobileSmall() || isMobileExtraSmall()), divider: isLoggedIn, variant: "secondary", className: styles.marginTop1, component: menuAnchor ? <ProfileDestinationsMenu /> : undefined },
    {id: "partners", label: capitalize(t("common.label.partners")), onClick: () => navigateTo(composePath(PATHS.PARTNERSHIPS), "Partners", "sidepanel"), align: "top", isVisible: ((isMobileSmall() || isMobileExtraSmall()) && showPartnersButton), variant: "secondary"},
    {id: "about_us", label: capitalize(t("common.label.about_us")), onClick: () => navigateTo(composePath(PATHS.ABOUT), "About Us", "sidepanel"), align: "top", isVisible: (isMobileSmall() || isMobileExtraSmall()), variant: "secondary"},
    {id: "subscription", label: capitalize(t("common.label.subscription")), onClick: () => navigateTo(composePath(PATHS.SUBSCRIPTION), "Subscription", "sidepanel"), align: "top", isVisible: (isMobileSmall() || isMobileExtraSmall()), variant: "secondary"},
    {id: "support", label: t("common.label.support"), onClick: () => navigateToSupport(), align: "top", isVisible: true, variant: "secondary", divider: !(isMobileExtraSmall() || isMobileSmall())},
    {id: "sign_out", label: t("common.label.sign_out"), icon: <LogoutIcon />, iconClass: styles.menuIconSmall, iconSize: 20, onClick: () => signOutHandler(), divider: true, align: "bottom", isVisible: isLoggedIn, variant: "secondary"}
]);

// after - much more readable and well-defined sections.
setUserMenuOptions([
  {
    id: "vacations",
    label: t("common.label.vacations"),
    icon: <LuggageIcon />,
    onClick: () =>
      navigateTo(
        isAdminUser() ? PATHS.VACATIONS_ADMIN : PATHS.VACATIONS_UPCOMING,
        "My Vacations",
        "sidepanel",
      ),
    align: "top",
    isVisible: isLoggedIn && !isGuestUser(),
    variant: "primary",
  },
  {
    id: "rewards",
    label: t("profile.points_rewards.title"),
    icon: <ReceiptIcon />,
    onClick: () => navigateTo(PATHS.REWARDS_POINTS),
    align: "top",
    isVisible: isLoggedIn && !isTrialUser(),
    variant: "primary",
  },
  {
    id: "settings",
    label: t("profile.account_settings.title"),
    icon: <UserSettingsIcon />,
    onClick: () =>
      navigateTo(PATHS.ACCOUNT_SETTINGS, "Account Settings", "sidepanel"),
    align: "top",
    isVisible: isLoggedIn,
    variant: "primary",
  },
  {
    id: "files",
    label: t("profile.payment_documents.title"),
    icon: <DocumentIcon />,
    onClick: () => navigateTo(PATHS.USER_FILES),
    align: "top",
    isVisible: isLoggedIn && !areFilesDisabled,
    variant: "primary",
  },
  {
    id: "refer_friend",
    label: t("common.label.refer_friend"),
    icon: <TravelerIcon />,
    onClick: () => onReferFriendClick(),
    align: "top",
    isVisible: isLoggedIn && !isReferralDisabled,
    variant: "primary",
    className: !showNewMarketplace ? styles.marginBottom2 : "",
  },
  {
    id: "shop",
    label: t(isTrialUser() ? "common.label.shop_trial" : "marketplace.title"),
    icon: <ShopIcon />,
    onClick: () => navigateTo(PATHS.SHOP),
    align: "top",
    isVisible: isLoggedIn && showNewMarketplace,
    variant: "primary",
    className: styles.marginBottom2,
  },
  {
    id: "destinations",
    label: capitalize(t("common.label.destinations")),
    onClick: () => navigateTo(PATHS.DESTINATIONS, "Destinations", "sidepanel"),
    align: "top",
    isVisible: isMobileSmall() || isMobileExtraSmall(),
    divider: isLoggedIn,
    variant: "secondary",
    className: styles.marginTop1,
    component: menuAnchor ? <ProfileDestinationsMenu /> : undefined,
  },
  {
    id: "partners",
    label: capitalize(t("common.label.partners")),
    onClick: () =>
      navigateTo(composePath(PATHS.PARTNERSHIPS), "Partners", "sidepanel"),
    align: "top",
    isVisible: (isMobileSmall() || isMobileExtraSmall()) && showPartnersButton,
    variant: "secondary",
  },
  {
    id: "about_us",
    label: capitalize(t("common.label.about_us")),
    onClick: () =>
      navigateTo(composePath(PATHS.ABOUT), "About Us", "sidepanel"),
    align: "top",
    isVisible: isMobileSmall() || isMobileExtraSmall(),
    variant: "secondary",
  },
  {
    id: "subscription",
    label: capitalize(t("common.label.subscription")),
    onClick: () =>
      navigateTo(composePath(PATHS.SUBSCRIPTION), "Subscription", "sidepanel"),
    align: "top",
    isVisible: isMobileSmall() || isMobileExtraSmall(),
    variant: "secondary",
  },
  {
    id: "support",
    label: t("common.label.support"),
    onClick: () => navigateToSupport(),
    align: "top",
    isVisible: true,
    variant: "secondary",
    divider: !(isMobileExtraSmall() || isMobileSmall()),
  },
  {
    id: "sign_out",
    label: t("common.label.sign_out"),
    icon: <LogoutIcon />,
    iconClass: styles.menuIconSmall,
    iconSize: 20,
    onClick: () => signOutHandler(),
    divider: true,
    align: "bottom",
    isVisible: isLoggedIn,
    variant: "secondary",
  },
]);
