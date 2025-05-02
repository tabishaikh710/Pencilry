const permissions = {
    client: {
      canPostJobs: true,
      canMessageIllustrators: true,
      canViewApplicants: true,
      canApplyToJobs: false
    },
    illustrator: {
      canPostJobs: false,
      canMessageClients: true,
      canViewApplicants: false,
      canApplyToJobs: true
    },
    admin: {
      canPostJobs: true,
      canMessageClients: true,
      canMessageIllustrators: true,
      canViewApplicants: true,
      canApplyToJobs: true,
      canManageUsers: true,
      canViewAllProjects: true
    }
  };
  