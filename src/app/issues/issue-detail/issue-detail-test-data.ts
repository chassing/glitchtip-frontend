import { IssueDetail } from "../interfaces";

// data from api/0/issues/{{ issue number }}
export const sampleIssueDetail: IssueDetail = {
  seenBy: [
    {
      username: "emily@burkesoftware.com",
      lastLogin: "2020-01-06T16:45:45.663255Z",
      isSuperuser: false,
      emails: [
        { is_verified: true, id: "607715", email: "emily@burkesoftware.com" }
      ],
      isManaged: false,
      lastActive: "2020-01-13T16:05:37.706665Z",
      isStaff: false,
      identities: [],
      id: "559298",
      isActive: true,
      has2fa: false,
      name: "Emily Jensen",
      avatarUrl:
        "https://secure.gravatar.com/avatar/e3ab61b5794bcde2bc68ccfa1b860bf8?s=32&d=mm",
      dateJoined: "2019-12-02T18:32:40.995712Z",
      options: {
        timezone: "UTC",
        stacktraceOrder: -1,
        language: "en",
        clock24Hours: false
      },
      flags: { newsletter_consent_prompt: false },
      avatar: { avatarUuid: null, avatarType: "letter_avatar" },
      hasPasswordAuth: true,
      email: "emily@burkesoftware.com",
      lastSeen: "2020-01-13T16:08:55.736990Z"
    }
  ],
  platform: "python",
  pluginIssues: [],
  lastSeen: "2020-01-09T14:25:31.183330Z",
  userReportCount: 0,
  numComments: 0,
  userCount: 0,
  stats: {
    "30d": [
      [1576281600, 0],
      [1576368000, 0],
      [1576454400, 0],
      [1576540800, 0],
      [1576627200, 0],
      [1576713600, 0],
      [1576800000, 0],
      [1576886400, 0],
      [1576972800, 0],
      [1577059200, 0],
      [1577145600, 0],
      [1577232000, 0],
      [1577318400, 0],
      [1577404800, 0],
      [1577491200, 0],
      [1577577600, 0],
      [1577664000, 0],
      [1577750400, 0],
      [1577836800, 0],
      [1577923200, 0],
      [1578009600, 0],
      [1578096000, 0],
      [1578182400, 0],
      [1578268800, 0],
      [1578355200, 0],
      [1578441600, 0],
      [1578528000, 6],
      [1578614400, 0],
      [1578700800, 0],
      [1578787200, 0],
      [1578873600, 0]
    ],
    "24h": [
      [1578844800, 0],
      [1578848400, 0],
      [1578852000, 0],
      [1578855600, 0],
      [1578859200, 0],
      [1578862800, 0],
      [1578866400, 0],
      [1578870000, 0],
      [1578873600, 0],
      [1578877200, 0],
      [1578880800, 0],
      [1578884400, 0],
      [1578888000, 0],
      [1578891600, 0],
      [1578895200, 0],
      [1578898800, 0],
      [1578902400, 0],
      [1578906000, 0],
      [1578909600, 0],
      [1578913200, 0],
      [1578916800, 0],
      [1578920400, 0],
      [1578924000, 0],
      [1578927600, 0],
      [1578931200, 0]
    ]
  },
  culprit: "polls.urls in <module>",
  title: "AttributeError: type object 'ResultsView' has no attribute 'as_view'",
  id: 1427810956,
  assignedTo: null,
  participants: [
    {
      username: "emily@burkesoftware.com",
      lastLogin: "2020-01-06T16:45:45.663255Z",
      isSuperuser: false,
      emails: [
        { is_verified: true, id: "607715", email: "emily@burkesoftware.com" }
      ],
      isManaged: false,
      lastActive: "2020-01-13T16:05:37.706665Z",
      isStaff: false,
      identities: [],
      id: "559298",
      isActive: true,
      has2fa: false,
      name: "Emily Jensen",
      avatarUrl:
        "https://secure.gravatar.com/avatar/e3ab61b5794bcde2bc68ccfa1b860bf8?s=32&d=mm",
      dateJoined: "2019-12-02T18:32:40.995712Z",
      options: {
        timezone: "UTC",
        stacktraceOrder: -1,
        language: "en",
        clock24Hours: false
      },
      flags: { newsletter_consent_prompt: false },
      avatar: { avatarUuid: null, avatarType: "letter_avatar" },
      hasPasswordAuth: true,
      email: "emily@burkesoftware.com"
    }
  ],
  logger: null,
  type: "error",
  annotations: [],
  metadata: {
    function: "<module>",
    type: "AttributeError",
    value: "type object 'ResultsView' has no attribute 'as_view'",
    filename: "polls/urls.py"
  },
  status: "unresolved",
  pluginActions: [],
  tags: [
    { totalValues: 6, name: "Handled", key: "handled" },
    { totalValues: 6, name: "Level", key: "level" },
    { totalValues: 6, name: "Mechanism", key: "mechanism" },
    { totalValues: 6, name: "Runtime", key: "runtime" },
    { totalValues: 6, name: "Runtime.Name", key: "runtime.name" },
    { totalValues: 6, name: "Server", key: "server_name" }
  ],
  subscriptionDetails: { reason: "assigned" },
  isPublic: true,
  hasSeen: true,
  firstRelease: null,
  shortId: "DJANGO-APP-9",
  shareId: "e09c87178a8b4bf78e4548c1d9f817b1",
  firstSeen: "2019-12-09T14:22:51.793749Z",
  count: "6",
  permalink:
    "https://sentry.io/organizations/burke-software-consulting/issues/1427810956/",
  level: "error",
  isSubscribed: true,
  pluginContexts: [],
  isBookmarked: false,
  project: {
    platform: "python",
    slug: "django-app",
    id: 1851390,
    name: "django-app"
  },
  lastRelease: null,
  activity: [
    {
      data: {},
      dateCreated: "2020-01-10T19:22:28.849093Z",
      type: "set_public",
      id: "722403357",
      user: {
        username: "emily@burkesoftware.com",
        lastLogin: "2020-01-06T16:45:45.663255Z",
        isSuperuser: false,
        emails: [
          { is_verified: true, id: "607715", email: "emily@burkesoftware.com" }
        ],
        isManaged: false,
        lastActive: "2020-01-13T16:05:37.706665Z",
        isStaff: false,
        identities: [],
        id: "559298",
        isActive: true,
        has2fa: false,
        name: "Emily Jensen",
        avatarUrl:
          "https://secure.gravatar.com/avatar/e3ab61b5794bcde2bc68ccfa1b860bf8?s=32&d=mm",
        dateJoined: "2019-12-02T18:32:40.995712Z",
        options: {
          timezone: "UTC",
          stacktraceOrder: -1,
          language: "en",
          clock24Hours: false
        },
        flags: { newsletter_consent_prompt: false },
        avatar: { avatarUuid: null, avatarType: "letter_avatar" },
        hasPasswordAuth: true,
        email: "emily@burkesoftware.com"
      }
    },
    {
      data: {},
      dateCreated: "2020-01-10T19:22:28.836618Z",
      type: "set_private",
      id: "722403356",
      user: {
        username: "emily@burkesoftware.com",
        lastLogin: "2020-01-06T16:45:45.663255Z",
        isSuperuser: false,
        emails: [
          { is_verified: true, id: "607715", email: "emily@burkesoftware.com" }
        ],
        isManaged: false,
        lastActive: "2020-01-13T16:05:37.706665Z",
        isStaff: false,
        identities: [],
        id: "559298",
        isActive: true,
        has2fa: false,
        name: "Emily Jensen",
        avatarUrl:
          "https://secure.gravatar.com/avatar/e3ab61b5794bcde2bc68ccfa1b860bf8?s=32&d=mm",
        dateJoined: "2019-12-02T18:32:40.995712Z",
        options: {
          timezone: "UTC",
          stacktraceOrder: -1,
          language: "en",
          clock24Hours: false
        },
        flags: { newsletter_consent_prompt: false },
        avatar: { avatarUuid: null, avatarType: "letter_avatar" },
        hasPasswordAuth: true,
        email: "emily@burkesoftware.com"
      }
    },
    {
      data: {},
      dateCreated: "2020-01-10T19:20:06.492341Z",
      type: "unassigned",
      id: "722402904",
      user: {
        username: "emily@burkesoftware.com",
        lastLogin: "2020-01-06T16:45:45.663255Z",
        isSuperuser: false,
        emails: [
          { is_verified: true, id: "607715", email: "emily@burkesoftware.com" }
        ],
        isManaged: false,
        lastActive: "2020-01-13T16:05:37.706665Z",
        isStaff: false,
        identities: [],
        id: "559298",
        isActive: true,
        has2fa: false,
        name: "Emily Jensen",
        avatarUrl:
          "https://secure.gravatar.com/avatar/e3ab61b5794bcde2bc68ccfa1b860bf8?s=32&d=mm",
        dateJoined: "2019-12-02T18:32:40.995712Z",
        options: {
          timezone: "UTC",
          stacktraceOrder: -1,
          language: "en",
          clock24Hours: false
        },
        flags: { newsletter_consent_prompt: false },
        avatar: { avatarUuid: null, avatarType: "letter_avatar" },
        hasPasswordAuth: true,
        email: "emily@burkesoftware.com"
      }
    },
    {
      data: {
        assignee: "559298",
        assigneeType: "user",
        assigneeEmail: "emily@burkesoftware.com"
      },
      dateCreated: "2020-01-10T19:20:03.424081Z",
      type: "assigned",
      id: "722402897",
      user: {
        username: "emily@burkesoftware.com",
        lastLogin: "2020-01-06T16:45:45.663255Z",
        isSuperuser: false,
        emails: [
          { is_verified: true, id: "607715", email: "emily@burkesoftware.com" }
        ],
        isManaged: false,
        lastActive: "2020-01-13T16:05:37.706665Z",
        isStaff: false,
        identities: [],
        id: "559298",
        isActive: true,
        has2fa: false,
        name: "Emily Jensen",
        avatarUrl:
          "https://secure.gravatar.com/avatar/e3ab61b5794bcde2bc68ccfa1b860bf8?s=32&d=mm",
        dateJoined: "2019-12-02T18:32:40.995712Z",
        options: {
          timezone: "UTC",
          stacktraceOrder: -1,
          language: "en",
          clock24Hours: false
        },
        flags: { newsletter_consent_prompt: false },
        avatar: { avatarUuid: null, avatarType: "letter_avatar" },
        hasPasswordAuth: true,
        email: "emily@burkesoftware.com"
      }
    },
    {
      data: {},
      dateCreated: "2020-01-09T14:22:51.793749Z",
      type: "first_seen",
      id: "0",
      user: null
    }
  ],
  statusDetails: {}
};