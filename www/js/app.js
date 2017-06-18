/**
 * Main App Js File to intiate the angular App.
 * Created On: 27 Jun, 2014, 12:11:57 PM
 * replace date_due with due_date_c for tasks in entire app - for internal.simplecrmondemand.com
 */
var deviceWidth = parseInt($(window).width(), 10);

//Initalize the app
var app = angular.module('myApp', ['ui.router', 'editable', 'simplePagination', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'angular-loading-bar', 'ngRoute', 'snap']);
/*
 * Boostrapping Angular to Cordova Events.
 */
document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener("pause", onDevicePause, false);
document.addEventListener("backbutton", onBackButton, false);
document.addEventListener("resetButton", onResetButton, false);
document.addEventListener("signoutButton", onSignoutButton, false);

function onDeviceReady() {
    angular.bootstrap(document, ['app']);
}
function onDevicePause() {
    angular.bootstrap(document, ['app']);
}
function onBackButton() {
    var modal = $('#backModal');
    if (modal.length > 0) {
        $('#backModal').modal('show');
    } else {
        $('[id^=Modal]').modal('hide');
        $('*').removeClass('modal-open');
        $('.modal-backdrop').remove();
        history.back();
    }
}

function onResetButton() {
    var modal = $('#resetModal');
    if (modal.length > 0) {
        $('#resetModal').modal('show');
    } else {
        $('[id^=Modal]').modal('hide');
        $('*').removeClass('modal-open');
        $('.modal-backdrop').remove();
        //scope.reset();

    }
}


function onSignoutButton() {
    var modal = $('#signoutModal');
    if (modal.length > 0) {
        $('#signoutModal').modal('show');
    } else {
        $('[id^=Modal]').modal('hide');
        $('*').removeClass('modal-open');
        $('.modal-backdrop').remove();
        //scope.reset();

    }
}



/*
 * Running the xEditable plugin with the app.
 */
app.run(function (editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
/*
 * CONFIGURATIONS
 */

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
                .otherwise('/login');
        $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'partials/login.html',
                    controller: 'LoginController'
                })
                .state('home', {
                    url: '/home',
                    abstract: true,
                    templateUrl: 'partials/home/master.html',
                    controller: 'HomeController'
                })
                .state('home.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'partials/home/dashboard.html',
                    controller: 'DashboardController',
                })
                /*
                 * EMAILS
                 */
                .state('home.emails', {
                    url: '/email',
                    abstract: true,
                    templateUrl: 'partials/email/master.html',
                    controller: 'EmailController'
                })
                .state('home.emails.compose', {
                    url: '/compose/:toID/:toName',
                    templateUrl: 'partials/email/compose.html',
                    controller: 'EmailComposeController'
                })
                /*
                 * SMS
                 */
                .state('home.sms', {
                    url: '/sms',
                    abstract: true,
                    templateUrl: 'partials/sms/master.html',
                    controller: 'SMSController'
                })
                .state('home.sms.compose', {
                    url: '/compose/:toNum',
                    templateUrl: 'partials/sms/compose.html',
                    controller: 'SMSComposeController'
                })
                /*
                 * ACCOUNTS STATES
                 */
                .state('home.accounts', {
                    url: '/accounts',
                    abstract: true,
                    templateUrl: 'partials/accounts/master.html',
                    controller: 'AccountsController'
                })
                .state('home.accounts.list', {
                    url: '/list',
                    templateUrl: 'partials/accounts/list.html',
                    controller: 'AccountsListController',
                })
                .state('home.accounts.detail', {
                    url: '/detail/:id',
                    templateUrl: 'partials/accounts/detail.html',
                    controller: 'AccountsDetailController',
                })
                .state('home.accounts.create', {
                    url: '/create/:type',
                    templateUrl: 'partials/accounts/create.html',
                    controller: 'AccountsCreateController'
                })
                /*
                 * CONTACTS STATES
                 */
                .state('home.contacts', {
                    url: '/contacts',
                    abstract: true,
                    templateUrl: 'partials/contacts/master.html',
                    controller: 'ContactsController'
                })
                .state('home.contacts.list', {
                    url: '/list',
                    templateUrl: 'partials/contacts/list.html',
                    controller: 'ContactsListController'
                })
                .state('home.contacts.detail', {
                    url: '/detail/:id',
                    templateUrl: 'partials/contacts/detail.html',
                    controller: 'ContactsDetailController',
                })
                .state('home.contacts.create', {
                    url: '/create/:type',
                    templateUrl: 'partials/contacts/create.html',
                    controller: 'ContactsCreateController'
                })
                /*
                 * OPPORTUNITIES STATES
                 */
                .state('home.opportunities', {
                    url: '/opportunities',
                    abstract: true,
                    templateUrl: 'partials/opportunities/master.html',
                    controller: 'OpportunitiesController'
                })
                .state('home.opportunities.list', {
                    url: '/list',
                    templateUrl: 'partials/opportunities/list.html',
                    controller: 'OpportunitiesListController'
                })
                .state('home.opportunities.detail', {
                    url: '/:id',
                    templateUrl: 'partials/opportunities/detail.html',
                    controller: 'OpportunitiesDetailController'
                })
                .state('home.opportunities.create', {
                    url: '/create/:type',
                    templateUrl: 'partials/opportunities/create.html',
                    controller: 'OpportunitiesCreateController'
                })
                /*
                 * CALLS STATES
                 */
                .state('home.calls', {
                    url: '/calls',
                    abstract: true,
                    templateUrl: 'partials/calls/master.html',
                    controller: 'CallsController'
                })
                .state('home.calls.list', {
                    url: '/list',
                    templateUrl: 'partials/calls/list.html',
                    controller: 'CallsListController',
                })
                .state('home.calls.detail', {
                    url: '/detail/:id',
                    templateUrl: 'partials/calls/detail.html',
                    controller: 'CallsDetailController',
                })
                .state('home.calls.create', {
                    url: '/create/:type/:parentid',
                    templateUrl: 'partials/calls/create.html',
                    controller: 'CallsCreateController'
                })
                /*
                 * MEETINGS STATES
                 */
                .state('home.meetings', {
                    url: '/meetings',
                    abstract: true,
                    templateUrl: 'partials/meetings/master.html',
                    controller: 'MeetingsController'
                })
                .state('home.meetings.list', {
                    url: '/list',
                    templateUrl: 'partials/meetings/list.html',
                    controller: 'MeetingsListController',
                })
                .state('home.meetings.detail', {
                    url: '/detail/:id',
                    templateUrl: 'partials/meetings/detail.html',
                    controller: 'MeetingsDetailController',
                })
                .state('home.meetings.create', {
                    url: '/create/:type/:parentid',
                    templateUrl: 'partials/meetings/create.html',
                    controller: 'MeetingsCreateController'
                })
                /*
                 * TASKS STATES
                 */
                .state('home.tasks', {
                    url: '/tasks',
                    abstract: true,
                    templateUrl: 'partials/tasks/master.html',
                    controller: 'TasksController'
                })
                .state('home.tasks.list', {
                    url: '/list',
                    templateUrl: 'partials/tasks/list.html',
                    controller: 'TasksListController',
                })
                .state('home.tasks.detail', {
                    url: '/detail/:id',
                    templateUrl: 'partials/tasks/detail.html',
                    controller: 'TasksDetailController',
                })
                .state('home.tasks.create', {
                    url: '/create/:type/:parentid',
                    templateUrl: 'partials/tasks/create.html',
                    controller: 'TasksCreateController'
                })
                /*
                 * LEADS STATES
                 */
                .state('home.leads', {
                    url: '/leads',
                    abstract: true,
                    templateUrl: 'partials/leads/master.html',
                    controller: 'LeadsController'
                })
                .state('home.leads.list', {
                    url: '/list',
                    templateUrl: 'partials/leads/list.html',
                    controller: 'LeadsListController'
                })
                .state('home.leads.detail', {
                    url: '/detail/:id',
                    templateUrl: 'partials/leads/detail.html',
                    controller: 'LeadsDetailController',
                })
                .state('home.leads.create', {
                    url: '/create/:type',
                    templateUrl: 'partials/leads/create.html',
                    controller: 'LeadsCreateController'
                })
                .state('home.leads.convert', {
                    url: '/convert',
                    templateUrl: 'partials/leads/convert.html',
                    controller: 'LeadsConvertController'
                })
    }])

app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.responseInterceptors.push('myHttpInterceptor');
        var spinnerFunction = function spinnerFunction(data, headersGetter) {
            var btn = $("#loginUser, .save");
            btn.button('loading');
            return data;
        };
        $httpProvider.defaults.transformRequest.push(spinnerFunction);
    }])

app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }])

app.config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|sms|tel):/);
    }]);
/*
 * CONTROLLERS
 */
app.controller('LoginController', ['$scope', '$state', 'Login', function ($scope, $state, Login) {

        //Check Online/Offline status of the app
        document.addEventListener("online", appOnline, false);
        document.addEventListener("offline", appOffline, false);
        function appOnline() {
            $scope.networkOfflineStatus = false;
        }

        function appOffline() {
            $scope.networkOfflineStatus = true;
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

	// To retrieve value
	var user_name = window.localStorage.getItem('user_name');
	var pass_word = window.localStorage.getItem('pass_word');

        $scope.user = {username: user_name, password: pass_word, url: 'http://demo.simplecrmdemo.com'};
        $scope.loginData = Login;
        $scope.login = function (user) {

	// To store value
	window.localStorage.setItem('user_name', user['username'] );
	window.localStorage.setItem('pass_word', user['password'] );

            Login.do(user).success(function (data) {
                $scope.networkOfflineStatus = false;
                if (data.sessionID !== undefined) {
                    Login.isLogged = 'yes';
                    Login.loggedUserName = user.username;
                    Login.loggedUserPassword = user.password;
                    Login.loggedURL = user.url;
                    Login.loggedUserID = data.userID;
                    $state.transitionTo('home.dashboard');
                    Login.loggedSessionID = data.sessionID;
                } else {
                    Login.error = 'Incorrect Username and/or Password and/or URL!';
                    return;
                }
            }).error(errorInLoading)
        }
        $scope.noLogin = function () {

            $scope.user = {username: '', password: '', url: 'http://demo.simplecrmdemo.com'};
        };
    }])

app.controller('HomeController', ['$scope', '$modal', '$state', '$stateParams', 'Login', 'Calls', 'Meetings', 'Users', 'Emails', function ($scope, $modal, $state, $stateParams, Login, Calls, Meetings, Users, Emails) {
        $scope.loginData = Login;
        $scope.noFooter = false;
        $scope.count = 0;

        //Define the current active state.
        $scope.activeState = $state.current.name;

        //Function to get the field name of the inline edit field when clicked 
        //in the detail view of child states.
        $scope.getFieldName = function (name) {
            $scope.updatableField = name;
        }

        $scope.getDirectionIcon = function (direction) {
            if (direction === 'Outbound' || direction === 'outbound') {
                return 'fa-arrow-up';
            } else if (direction === 'Inbound' || direction === 'inbound') {
                return 'fa-arrow-down';
            }
        }

        //Function to notify if connection is lost from the server
        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        //Call To get the list of all registered users.
        getUsers($scope.loginData);

        //Function To get the list of all registered users.
        function getUsers(user) {
            if (Users.list === '') {
                Users.getList(user).success(function (data) {
                    Users.list = data;
                    $scope.users = Users.list;
                }).error(errorInLoading)
            } else {
                $scope.users = Users.list;
            }
        }

        /*
         * CALLS REMINDERS START.
         */
//        //Interval to run every 40 seconds.
//        var callsReminderInterval = setInterval(function () {
//            if (Calls.list === '') {
//                var user = $scope.loginData;
//                var lastWeek = moment().subtract('weeks', 1).format('YYYY-MM-D HH:mm:ss');
//                var query = "calls.date_start > '" + lastWeek + "'";
//                getCallsList(user, query);
//            } else if (Calls.list !== '') {
//                checkForReminder(Calls.list);
//            }
//        }, 40000);

//        //Function to get calls list for reminders.
//        function getCallsList(user, query) {
//            Calls.getList(user, query).success(function (data) {
//                Calls.list = data;
//                checkForReminder(Calls.list);
//                $scope.networkOfflineStatus = false;
//            }).error(errorInLoading)
//        }
        /*
         * CALLS REMIDNERS END.
         */

        /*
         * MEETINGS REMINDERS START.
         */
//        //Interval to run every 40 seconds.
//        var meetingsReminderInterval = setInterval(function () {
//            if (Meetings.list === '') {
//                var user = $scope.loginData;
//                var lastWeek = moment().subtract('weeks', 1).format('YYYY-MM-D HH:mm:ss');
//                var query = "meetings.date_start > '" + lastWeek + "'";
//                getMeetingsList(user, query);
//            } else if (Meetings.list !== '') {
//                checkForReminder(Meetings.list);
//            }
//        }, 40000);

//        //Function to get calls list for reminders.
//        function getMeetingsList(user, query) {
//            Meetings.getList(user, query).success(function (data) {
//                Meetings.list = data;
//                checkForReminder(Meetings.list);
//                $scope.networkOfflineStatus = false;
//            }).error(errorInLoading)
//        }

        /*
         * MEETINGS REMIDNERS END.
         */
        function checkForReminder(list) {
            $scope.reminder = '';
            angular.forEach(list, function (module, key) {
                var moduleDateStart = module.name_value_list.date_start.value;
                var moduleReminderTime = parseInt(module.name_value_list.reminder_time.value);
                var moduleStatus = module.name_value_list.status.value;
                var moduleName = module.module_name;
                var moduleEmailReminderTime = parseInt(module.name_value_list.email_reminder_time.value);
                var moduleEmailReminderStatus = parseInt(module.name_value_list.email_reminder_sent.value);
                if (moduleReminderTime !== -1) {
                    var moduleReminderCheck = moment(moduleDateStart).subtract(moduleReminderTime, 'seconds').format('Do MMM YYYY HH:mm');
                    var now = moment().format('Do MMM YYYY HH:mm');
                    if (moduleReminderCheck === now && moduleStatus === 'Planned') {
                        $scope.reminder = {
                            id: module.name_value_list.id.value,
                            name: module.name_value_list.name.value,
                            status: module.name_value_list.status.value,
                            date_start: moment(module.name_value_list.date_start.value).format('Do MMM YYYY'),
                            date_start_time: moment(module.name_value_list.date_start.value).format('hh:mm a'),
                            type: moduleName,
                            state: moduleName.toLowerCase,
                        }
                    }
                }

                if (moduleEmailReminderTime !== -1) {
                    var moduleReminderCheck = moment(moduleDateStart).subtract(moduleReminderTime, 'seconds').format('Do MMM YYYY HH:mm');
                    var now = moment().format('Do MMM YYYY HH:mm');
                    if (moduleReminderCheck === now && moduleStatus === 'Planned' && moduleEmailReminderStatus === 0) {
                        Users.getDetail($scope.loginData, $scope.loginData.loggedUserID).success(function (data) {
                            $scope.email = {
                                toID: data[0].name_value_list.email1.value,
                                toName: data[0].name_value_list.first_name.value + " " + data[0].name_value_list.last_name.value,
                                fromID: data[0].name_value_list.email1.value,
                                fromName: 'Sugar CRM Reminders',
                                subject: moduleName + ' Reminder',
                                body: '<h3>' + moduleName + ' reminder for:- </h3>'
                                        + 'Call Name:- <b>' + module.name_value_list.name.value
                                        + '</b><br> on <br><b>' + moment(module.name_value_list.date_start.value).format('Do MMM YYYY')
                                        + '</b><br> @ <br><b>' + moment(module.name_value_list.date_start.value).format('hh:mm a')
                                        + '</b>.'
                            }
                            Emails.send($scope.email).success(function (data) {
                                if (data === 'SUCCESS') {
                                    if (moduleName === 'Calls') {
                                        Calls.inlineEdit($scope.loginData, module.name_value_list.id.value, 'email_reminder_sent', 1);
                                    } else if (moduleName === 'Meetings') {
                                        Meetings.inlineEdit($scope.loginData, module.name_value_list.id.value, 'email_reminder_sent', 1);
                                    }
                                }
                                $scope.networkOfflineStatus = false;
                            }).error(errorInLoading)
                            $scope.networkOfflineStatus = false;
                        }).error(errorInLoading)
                    }
                }
            })
            if ($scope.reminder) {
                var reminderModalInstance = $modal.open({
                    templateUrl: 'partials/reminder.html',
                    controller: RemindersController,
                    resolve: {
                        reminder: function () {
                            return $scope.reminder;
                        }
                    }
                });
            }
        }

        var RemindersController = function ($scope, $modalInstance, reminder) {
            $scope.reminder = reminder;
            var now = new Date().getTime();
            notificationDate = new Date(now);
            window.plugin.notification.local.add({
                id: Math.floor((Math.random() * 100) + 1), // is converted to a string
                title: reminder.type + ' Reminder',
                message: reminder.type + ' reminder for:- ' + reminder.name + ' on ' + reminder.date_start + ' @ ' + reminder.date_start_time,
                date: notificationDate,
                autoCancel: true,
            });
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }
    }])

app.controller('DashboardController', ['$scope', 'Login', 'Accounts', 'Contacts', 'Opportunities', 'Calls', 'Meetings', 'Tasks', 'Leads', function ($scope, Login, Accounts, Contacts, Opportunities, Calls, Meetings, Tasks, Leads) {
        $scope.loginData = Login;
        $scope.collapsed = {
            recent: false,
            upcoming: false
        };
        $scope.recentCount = 0;
        $scope.upcomingCount = 0;

        $scope.getDirectionIcon = function (direction) {
            if (direction === 'Outbound' || direction === 'outbound') {
                return 'fa-arrow-up';
            } else if (direction === 'Inbound' || direction === 'inbound') {
                return 'fa-arrow-down';
            }
        }

        $scope.refresh = function (type) {
            if (type === 'recent') {
                getRecentItems($scope.loginData);
            } else if (type === 'upcoming') {
                getUpcomingActivities($scope.loginData);
            }
        }

        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            errorInLoading()
            $scope.recentCount = 'Not Online';
            $scope.upcomingCount = 'Not Online';
        } else {
            $scope.networkOfflineStatus = false;
            $scope.upcomingListStatus = false;
            getRecentItems($scope.loginData);
            getUpcomingActivities($scope.loginData);
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
            $scope.recentAccounts = Accounts.recentAccounts;
            $scope.recentContacts = Contacts.recentContacts;
            $scope.recentOpportunities = Opportunities.recentOpportunities;
            $scope.recentCalls = Calls.recentCalls;
            $scope.recentMeetings = Meetings.recentMeetings;
            $scope.recentTasks = Tasks.recentTasks;
            $scope.upcomingCalls = Calls.upcomingCalls;
            $scope.upcomingMeetings = Meetings.upcomingMeetings;
            $scope.upcomingTasks = Tasks.upcomingTasks;
        }

        function getRecentItems(user) {
            var lastWeek = moment().subtract('weeks', 1).format('YYYY-MM-D HH:mm:ss');
            $scope.collapsed.recent = false;
            getRecentLeads(user, lastWeek);
        }

        /*
         * RECENT ITEMS
         */
        function getRecentLeads(user, lastWeek) {
            $scope.recentListStatus = false;
            var leadsQuery = "leads.date_modified > '" + lastWeek + "' AND leads.assigned_user_id = '" + user.loggedUserID + "'";
            Leads.getList(user, leadsQuery).success(function (data) {
                $scope.recentLeads = data;
                Leads.recentLeads = data;
                $scope.recentListStatus = true;
                $scope.countRecentLeads = $scope.recentLeads.length;
                if ($scope.countRecentLeads !== 0) {
                    $scope.recentCount += parseInt($scope.countRecentLeads);
                }
                getRecentAccounts(user, lastWeek);
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        function getRecentAccounts(user, lastWeek) {
            $scope.recentListStatus = false;
            var accountsQuery = "accounts.date_modified > '" + lastWeek + "' AND accounts.assigned_user_id = '" + user.loggedUserID + "'";
            Accounts.getList(user, accountsQuery).success(function (data) {
                $scope.recentAccounts = data;
                Accounts.recentAccounts = data;
                $scope.recentListStatus = true;
                $scope.countRecentAccounts = $scope.recentAccounts.length;
                if ($scope.countRecentAccounts !== 0) {
                    $scope.recentCount = parseInt($scope.countRecentAccounts);
                }
                getRecentContacts($scope.loginData, lastWeek);
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
        function getRecentContacts(user, lastWeek) {
            $scope.recentListStatus = false;
            var contactsQuery = "contacts.date_modified > '" + lastWeek + "' AND contacts.assigned_user_id = '" + user.loggedUserID + "'";
            Contacts.getList(user, contactsQuery).success(function (data) {
                $scope.recentContacts = data;
                Contacts.recentContacts = data;
                $scope.recentListStatus = true;
                $scope.countRecentContacts = $scope.recentContacts.length;
                if ($scope.countRecentContacts !== 0) {
                    $scope.recentCount += parseInt($scope.countRecentContacts);
                }
                getRecentOpportunities($scope.loginData, lastWeek);
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
        function getRecentOpportunities(user, lastWeek) {
            $scope.recentListStatus = false;
            var opportunitiesQuery = "opportunities.date_modified > '" + lastWeek + "' AND opportunities.assigned_user_id = '" + user.loggedUserID + "'";
            Opportunities.getList(user, opportunitiesQuery).success(function (data) {
                $scope.recentOpportunities = data;
                Opportunities.recentOpportunities = data;
                $scope.recentListStatus = true;
                $scope.countRecentOpportunities = $scope.recentOpportunities.length;
                if ($scope.countRecentOpportunities !== 0) {
                    $scope.recentCount += parseInt($scope.countRecentOpportunities);
                }
                getRecentCalls($scope.loginData, lastWeek);
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
        function getRecentCalls(user, lastWeek) {
            $scope.recentListStatus = false;
            var callsQuery = "calls.date_modified > '" + lastWeek + "' AND calls.assigned_user_id = '" + user.loggedUserID + "'";
            Calls.getList(user, callsQuery).success(function (data) {
                $scope.recentCalls = data;
                Calls.recentCalls = data;
                $scope.recentListStatus = true;
                $scope.countRecentCalls = $scope.recentCalls.length;
                if ($scope.countRecentCalls !== 0) {
                    $scope.recentCount += parseInt($scope.countRecentCalls);
                }
                getRecentMeetings($scope.loginData, lastWeek);
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
        function getRecentMeetings(user, lastWeek) {
            $scope.recentListStatus = false;
            var meetingsQuery = "meetings.date_modified > '" + lastWeek + "' AND meetings.assigned_user_id = '" + user.loggedUserID + "'";
            Meetings.getList(user, meetingsQuery).success(function (data) {
                $scope.recentMeetings = data;
                Meetings.recentMeetings = data;
                $scope.recentListStatus = true;
                $scope.countRecentMeetings = $scope.recentMeetings.length;
                if ($scope.countRecentMeetings !== 0) {
                    $scope.recentCount += parseInt($scope.countRecentMeetings);
                }
                getRecentTasks($scope.loginData, lastWeek);
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        function getRecentTasks(user, lastWeek) {
            $scope.recentListStatus = false;
            var tasksQuery = "tasks.date_modified > '" + lastWeek + "' AND tasks.assigned_user_id = '" + user.loggedUserID + "'";
            Tasks.getList(user, tasksQuery).success(function (data) {
                $scope.recentTasks = data;
                Tasks.recentTasks = data;
                $scope.recentListStatus = true;
                $scope.countRecentTasks = $scope.recentTasks.length;
                if ($scope.countRecentTasks !== 0) {
                    $scope.recentCount += parseInt($scope.countRecentTasks);
                }
                if ($scope.countRecentAccounts === 0 && $scope.countRecentContacts === 0 && $scope.countRecentOpportunities === 0 && $scope.countRecentCalls === 0 && $scope.countRecentMeetings === 0 && $scope.countRecentTasks === 0) {
                    $scope.emptyRecentList = true;
                    $scope.recentCount = 0;
                }
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }


        /*
         * UPCOMING ACTIVITIES
         */
        function getUpcomingActivities(user) {
            var nextWeek = moment().add('weeks', 1).format('YYYY-MM-D HH:mm:ss');
            var yesterday = moment().subtract('days', 1).format('YYYY-MM-D HH:mm:ss');
            $scope.collapsed.upcoming = false;
            getUpcomingCalls(user, yesterday, nextWeek);
        }
        function getUpcomingCalls(user, yesterday, nextWeek) {
            var callsQuery = "calls.date_start > '" + yesterday + "' AND calls.date_start < '" + nextWeek + "' AND calls.assigned_user_id = '" + user.loggedUserID + "' AND calls.status IN ('Not Held','Planned')";
            Calls.getList(user, callsQuery).success(function (data) {
                $scope.upcomingCalls = data;
                Calls.upcomingCalls = data;
                $scope.upcomingListStatus = true;
                $scope.countUpcomingCalls = $scope.upcomingCalls.length;
                if ($scope.countUpcomingCalls !== 0) {
                    $scope.upcomingCount = parseInt($scope.countUpcomingCalls);
                }
                getUpcomingMeetings(user, yesterday, nextWeek);
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
        function getUpcomingMeetings(user, yesterday, nextWeek) {
            $scope.upcomingListStatus = false;
            var meetingsQuery = "meetings.date_start > '" + yesterday + "' AND meetings.date_start < '" + nextWeek + "' AND meetings.assigned_user_id = '" + user.loggedUserID + "' AND meetings.status IN ('Not Held','Planned')";
            Meetings.getList(user, meetingsQuery).success(function (data) {
                $scope.upcomingMeetings = data;
                Meetings.upcomingMeetings = data;
                $scope.upcomingListStatus = true;
                $scope.countUpcomingMeetings = $scope.upcomingMeetings.length;
                if ($scope.countUpcomingMeetings !== 0) {
                    $scope.upcomingCount += parseInt($scope.countUpcomingMeetings);
                }
                getUpcomingTasks(user, yesterday, nextWeek);
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
        function getUpcomingTasks(user, yesterday, nextWeek) {
            $scope.upcomingListStatus = false;
            var tasksQuery = "tasks.date_due > '" + yesterday + "' AND tasks.date_due < '" + nextWeek + "' AND tasks.assigned_user_id = '" + user.loggedUserID + "' AND tasks.status IN ('Not Started','In Progress')";
            Tasks.getList(user, tasksQuery).success(function (data) {
                $scope.upcomingTasks = data;
                Tasks.upcomingTasks = data;
                $scope.upcomingListStatus = true;
                $scope.countUpcomingTasks = $scope.upcomingTasks.length;
                if ($scope.countUpcomingTasks !== 0) {
                    $scope.upcomingCount += parseInt($scope.countUpcomingTasks);
                }
                if ($scope.countUpcomingCalls === 0 && $scope.countUpcomingMeetings === 0 && $scope.countUpcomingTasks === 0) {
                    $scope.emptyUpcomingList = true;
                    $scope.upcomingCount = 0;
                }
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('EmailController', ['$scope', 'Login', function ($scope, Login) {
    }])

app.controller('EmailComposeController', ['$scope', '$state', '$stateParams', 'Users', 'Emails', function ($scope, $state, $stateParams, Users, Emails) {
        function errorInLoading() {
            $scope.netwokrOfflineStatus = true;
        }

        getUserEmail($scope.loginData.loggedUserID);
        $scope.composeMailStatus = false;
        function getUserEmail(id) {
            Users.getDetail($scope.loginData, id).success(function (data) {
                $scope.email = {
                    toID: $stateParams.toID,
                    toName: $stateParams.toName,
                    fromID: data[0].name_value_list.email1.value,
                    fromName: data[0].name_value_list.first_name.value + " " + data[0].name_value_list.last_name.value,
                    fromLabel: data[0].name_value_list.first_name.value + " " + data[0].name_value_list.last_name.value + "<" + data[0].name_value_list.email1.value + ">"
                }
                $scope.composeMailStatus = true;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.send = function (email) {
            Emails.send(email).success(function (data) {
                if (data === 'SUCCESS') {
                    $scope.email.cc = '';
                    $scope.email.bcc = '';
                    $scope.email.subject = '';
                    $scope.email.body = '';
                    $('#successModal').modal('show');
                }
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('SMSController', ['$scope', function ($scope) {
        $scope.noFooter = false;
    }])

app.controller('SMSComposeController', ['$scope', '$stateParams', function ($scope, $stateParams) {

        $scope.smsData = {
            message: 'Hi, Thanks for taking interest in our products and services.',
            toNum: $stateParams.toNum
        }

        $scope.send = function (smsData) {
            $('#inProcessModal').modal('show');
            var messageInfo = {
                phoneNumber: smsData.toNum,
                textMessage: smsData.message
            };
            sms.sendMessage(messageInfo, function (message) {
                $('#inProcessModal').modal('hide');
                $('#successModal').modal('show');
            }, function (error) {
                $('#inProcessModal').modal('hide');
                $('#failureModal').modal('hide');
            });
        }
    }])

/*
 * ACCOUNTS
 */
app.controller('AccountsController', ['$scope', '$state', function ($scope, $state) {
        $scope.activeState = $state.current.name;
    }])

app.controller('AccountsListController', ['$scope', 'Accounts', 'Pagination', function ($scope, Accounts, Pagination) {
        $scope.pagination = Pagination.getNew(7);
        $scope.listStatus = false;
        //For Snap Drawers
        $scope.opts = {
            disable: 'right'
        };
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
            $scope.accounts = Accounts.list;
            $scope.listStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            getAccounts($scope.loginData);
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
            $scope.accounts = Accounts.list;
            $scope.listStatus = true;
        }

        function getAccounts(user) {
            var accountsQuery = "accounts.assigned_user_id = '" + user.loggedUserID + "'";
            Accounts.getList(user, accountsQuery).success(function (data) {
                if (data.length === 0) {
                    $scope.emptyList = true;
                }
                $scope.accounts = data;
                Accounts.list = data;
                $scope.pagination.numPages = Math.ceil($scope.accounts.length / $scope.pagination.perPage);
                $scope.listStatus = true;
                $scope.count = $scope.accounts.length;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('AccountsDetailController', ['$scope', '$state', '$stateParams', 'Accounts', 'Users', 'Contacts', 'Opportunities', 'Calls', 'Meetings', 'Tasks', function ($scope, $state, $stateParams, Accounts, Users, Contacts, Opportunities, Calls, Meetings, Tasks) {
        $scope.contactInfoTable = true;
        $scope.moreInfoTable = false;
        $scope.billingInfoTable = false;
        $scope.shippingInfoTable = false;
        $scope.minimiseDetails = false;
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            if ($stateParams.id !== '') {
                getAccountDetail($stateParams.id);
            } else {
                $scope.detailStatus = false;
                $scope.smsBodyTemplate = 'Hi,%20Thanks%20for%20taking%20interest%20in%20our%20products%20and%20services.';
            }
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        function getAccountDetail(id) {
            Accounts.getDetail($scope.loginData, id).success(function (data) {
                $scope.accountDetail = data[0].name_value_list;
                $scope.detailStatus = true;
                Accounts.detail = data[0].name_value_list;
                $scope.networkOfflineStatus = false;
                $scope.accountRelate = {};
                $scope.relateStatus = {};
                getAccountRelated(data[0].name_value_list.id.value, 'contacts', Contacts);
                getAccountRelated(data[0].name_value_list.id.value, 'opportunities', Opportunities);
                getAccountRelated(data[0].name_value_list.id.value, 'calls', Calls);
                getAccountRelated(data[0].name_value_list.id.value, 'meetings', Meetings);
                getAccountRelated(data[0].name_value_list.id.value, 'tasks', Tasks);
            }).error(errorInLoading)
        }

        function getAccountRelated(id, linkName, factory) {
            var fieldList = factory.fieldList;
            Accounts.getRelatedList($scope.loginData, id, linkName, fieldList).success(function (data) {
                $scope.accountRelate[linkName] = data;
                $scope.relateStatus[linkName] = true;
                $scope.relateStatus[linkName + 'Collapsed'] = true;
            });
        }

        $scope.updateAccountInline = function (data) {
            Accounts.inlineEdit($scope.loginData, $scope.accountDetail.id.value, $scope.updatableField, data).success(function (data) {
                $scope.accountDetail[$scope.updatableField] = data[$scope.updatableField];
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.intitiateMap = function (accountDetail) {
            var street = accountDetail.shipping_address_street;
            var city = accountDetail.shipping_address_city;
            var state = accountDetail.shipping_address_state;
            var country = accountDetail.shipping_address_country;
            $scope.position = street.value + '&' + city.value + '&' + state.value + '&' + country.value;
        }

        $scope.setActiveNumber = function (number) {
            $scope.activeNumber = number;
        }
    }])

app.controller('AccountsCreateController', ['$scope', '$stateParams', '$state', 'Accounts', 'Users', function ($scope, $stateParams, $state, Accounts, Users) {
        //Call To get the list of all registered users.
        getUsers($scope.loginData);

        //Function To get the list of all registered users.
        function getUsers(user) {
            if (Users.list === '') {
                Users.getList(user).success(function (data) {
                    Users.list = data;
                    $scope.users = Users.list;
                }).error(errorInLoading)
            } else {
                $scope.users = Users.list;
            }
        }

        $scope.cfbStatus = false;
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        if (deviceWidth > 200 & deviceWidth < 599) {
            $('select.form-control').removeClass('input-lg').removeClass('form-control');
        }

        if ($stateParams.type === 'new') {
            $scope.type = 'Create';
            $scope.account = {
                "assigned_user_id":
                        {
                            "name": 'assigned_user_id',
                            "value": $scope.loginData.loggedUserID
                        }
            }
            $scope.phone_office_status = false;
            $scope.phone_alternate_status = false;
        } else if ($stateParams.type === 'edit') {
            $scope.account = Accounts.detail;
            $scope.type = 'Edit';
            $scope.phone_office_status = false;
            $scope.phone_alternate_status = false;
        }

        $scope.save = function (account) {
            Accounts.setDetail($scope.loginData, account).success(function (data) {
                $scope.id = data.id;
                $state.transitionTo('home.accounts.detail', {id: $scope.id});
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.reset = function () {
            $scope.account = ''
        }

        $scope.copyFromBillingReal = function (account) {
            if ($scope.cfbStatus) {
                var billing_address_street = account.billing_address_street;
                var billing_address_city = account.billing_address_city;
                var billing_address_state = account.billing_address_state;
                var billing_address_country = account.billing_address_country;
                var billing_address_postalcode = account.billing_address_postalcode;

                if (billing_address_street) {
                    account.shipping_address_street = {
                        name: 'shipping_address_street',
                        value: billing_address_street.value
                    };
                }
                if (billing_address_city) {
                    account.shipping_address_city = {
                        name: 'shipping_address_city',
                        value: billing_address_city.value
                    };
                }
                if (billing_address_state) {
                    account.shipping_address_state = {
                        name: 'shipping_address_state',
                        value: billing_address_state.value
                    };
                }
                if (billing_address_country) {
                    account.shipping_address_country = {
                        name: 'shipping_address_country',
                        value: billing_address_country.value
                    };
                }
                if (billing_address_postalcode) {
                    account.shipping_address_postalcode = {
                        name: 'shipping_address_postalcode',
                        value: billing_address_postalcode.value
                    };
                }
            }
        }

        $scope.copyFromBilling = function (account) {
            $scope.cfbStatus = !$scope.cfbStatus;
            if ($scope.cfbStatus) {
                var billing_address_street = account.billing_address_street;
                var billing_address_city = account.billing_address_city;
                var billing_address_state = account.billing_address_state;
                var billing_address_country = account.billing_address_country;
                var billing_address_postalcode = account.billing_address_postalcode;

                if (billing_address_street) {
                    account.shipping_address_street = {
                        name: 'shipping_address_street',
                        value: billing_address_street.value
                    };
                }
                if (billing_address_city) {
                    account.shipping_address_city = {
                        name: 'shipping_address_city',
                        value: billing_address_city.value
                    };
                }
                if (billing_address_state) {
                    account.shipping_address_state = {
                        name: 'shipping_address_state',
                        value: billing_address_state.value
                    };
                }
                if (billing_address_country) {
                    account.shipping_address_country = {
                        name: 'shipping_address_country',
                        value: billing_address_country.value
                    };
                }
                if (billing_address_postalcode) {
                    account.shipping_address_postalcode = {
                        name: 'shipping_address_postalcode',
                        value: billing_address_postalcode.value
                    };
                }
            } else {
                account.shipping_address_street = {
                    name: 'shipping_address_street',
                    value: ''
                };
                account.shipping_address_city = {
                    name: 'shipping_address_city',
                    value: ''
                };
                account.shipping_address_state = {
                    name: 'shipping_address_state',
                    value: ''
                };
                account.shipping_address_country = {
                    name: 'shipping_address_country',
                    value: ''
                };
                account.shipping_address_postalcode = {
                    name: 'shipping_address_postalcode',
                    value: ''
                };
            }

        }

    }])

/*
 * CONTACTS
 */
app.controller('ContactsController', ['$scope', '$state', function ($scope, $state) {
        $scope.activeState = $state.current.name;
    }])

app.controller('ContactsListController', ['$scope', '$state', 'Contacts', 'Pagination', function ($scope, $state, Contacts, Pagination) {
        $scope.pagination = Pagination.getNew(7);
        $scope.listStatus = false;
        //For Snap Drawers
        $scope.opts = {
            disable: 'right'
        };        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
            $scope.contacts = Contacts.list;
            $scope.listStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            getContacts($scope.loginData);
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
            $scope.contacts = Contacts.list;
            $scope.listStatus = true;
        }

        function getContacts(user) {
            var contactsQuery = "contacts.assigned_user_id = '" + user.loggedUserID + "'";
            Contacts.getList(user, contactsQuery).success(function (data) {
                if (data.length === 0) {
                    $scope.emptyList = true;
                }
                $scope.contacts = data;
                Contacts.list = data;
                $scope.pagination.numPages = Math.ceil($scope.contacts.length / $scope.pagination.perPage);
                $scope.listStatus = true;
                $scope.count = $scope.contacts.length;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('ContactsDetailController', ['$scope', '$stateParams', '$state', 'Contacts', 'Accounts', 'Opportunities', 'Calls', 'Meetings', 'Tasks', function ($scope, $stateParams, $state, Contacts, Accounts, Opportunities, Calls, Meetings, Tasks) {
        $scope.smsBodyTemplate = 'Hi,%20Thanks%20for%20taking%20interest%20in%20our%20products%20and%20services.';
        $scope.contactInfoTable = true;
        $scope.moreInfoTable = false;
        $scope.minimiseDetails = false;
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            if ($stateParams.id !== '') {
                getContactDetail($stateParams.id);
            } else {
                $scope.detailStatus = false;
                $scope.contactAccountStatus = false;
            }
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        function getContactDetail(id) {
            Contacts.getDetail($scope.loginData, id).success(function (data) {
                $scope.contactDetail = data[0].name_value_list;
                Contacts.detail = data[0].name_value_list;
                $scope.detailStatus = true;
                $scope.networkOfflineStatus = false;
                $scope.contactRelate = {};
                $scope.relateStatus = {};
                getContactRelated(data[0].name_value_list.id.value, 'opportunities', Opportunities);
                getContactRelated(data[0].name_value_list.id.value, 'calls', Calls);
                getContactRelated(data[0].name_value_list.id.value, 'meetings', Meetings);
                getContactRelated(data[0].name_value_list.id.value, 'tasks', Tasks);
            }).error(errorInLoading)
        }

        function getContactRelated(id, linkName, factory) {
            var fieldList = factory.fieldList;
            Contacts.getRelatedList($scope.loginData, id, linkName, fieldList).success(function (data) {
                $scope.contactRelate[linkName] = data;
                $scope.relateStatus[linkName] = true;
                $scope.relateStatus[linkName + 'Collapsed'] = true;
            });
        }

        $scope.updateContactInline = function (data) {
            Contacts.inlineEdit($scope.loginData, $scope.contactDetail.id.value, $scope.updatableField, data).success(function (data) {
                $scope.contactDetail[$scope.updatableField] = data[$scope.updatableField];
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.setActiveNumber = function (number) {
            $scope.activeNumber = number;
        }
    }])

app.controller('ContactsCreateController', ['$scope', '$stateParams', '$state', 'Contacts', 'Accounts', 'Users', function ($scope, $stateParams, $state, Contacts, Accounts, Users) {
        //Call To get the list of all registered users.
        getUsers($scope.loginData);

        //Function To get the list of all registered users.
        function getUsers(user) {
            if (Users.list === '') {
                Users.getList(user).success(function (data) {
                    Users.list = data;
                    $scope.users = Users.list;
                }).error(errorInLoading)
            } else {
                $scope.users = Users.list;
            }
        }

        if (deviceWidth > 200 & deviceWidth < 599) {
            $('select.form-control').removeClass('input-lg').removeClass('form-control');
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        getAccountList($scope.loginData);
        function getAccountList(user) {
            Accounts.getList(user).success(function (data) {
                $scope.accountList = data;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
        if ($stateParams.type === 'new') {
            $scope.type = 'Create';
            $scope.contact = {
                "assigned_user_id":
                        {
                            "name": 'assigned_user_id',
                            "value": $scope.loginData.loggedUserID
                        }
            }
            $scope.phone_office_status = false;
        } else if ($stateParams.type === 'edit') {
            $scope.contact = Contacts.detail;
            $scope.type = 'Edit';
            $scope.phone_office_status = false;
        }

        $scope.save = function (contact) {
            Contacts.setDetail($scope.loginData, contact).success(function (data) {
                $scope.id = data.id;
                $state.transitionTo('home.contacts.detail', {id: $scope.id});
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.reset = function () {
            $scope.contact = ''
        }
    }])

/*
 * OPPORTUNITIES
 */
app.controller('OpportunitiesController', ['$scope', '$state', function ($scope, $state) {
        $scope.activeState = $state.current.name;
    }])

app.controller('OpportunitiesListController', ['$scope', 'Opportunities', 'Pagination', function ($scope, Opportunities, Pagination) {
        $scope.pagination = Pagination.getNew(7);
        $scope.listStatus = false;
        //For Snap Drawers
        $scope.opts = {
            disable: 'right'
        };
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
            $scope.opportunities = Opportunities.list;
            $scope.listStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            getOpportunities($scope.loginData);
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
            $scope.opportunities = Opportunities.list;
            $scope.listStatus = true;
        }

        function getOpportunities(user) {
            var opportunitiesQuery = "opportunities.assigned_user_id = '" + user.loggedUserID + "'";
            Opportunities.getList(user, opportunitiesQuery).success(function (data) {
                if (data.length === 0) {
                    $scope.emptyList = true;
                }
                $scope.opportunities = data;
                $scope.pagination.numPages = Math.ceil($scope.opportunities.length / $scope.pagination.perPage);
                $scope.listStatus = true;
                $scope.count = $scope.opportunities.length;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)

        }
    }])

app.controller('OpportunitiesDetailController', ['$scope', '$stateParams', 'Opportunities', 'Users', 'Contacts', 'Calls', 'Meetings', 'Tasks', function ($scope, $stateParams, Opportunities, Users, Contacts, Calls, Meetings, Tasks) {
        $scope.moreInfoTable = true;
        $scope.minimiseDetails = false;
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            if ($stateParams.id !== '') {
                getOpportunityDetail($stateParams.id);
            } else {
                $scope.detailStatus = false;
            }
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        $scope.salesStages = Opportunities.salesStages;

        function getOpportunityDetail(id) {
            Opportunities.getDetail($scope.loginData, id).success(function (dataa) {

                //var link_list_first = [];

		var relationship_list = dataa['relationship_list'];
		var relationship_list_first = relationship_list[0];
		var link_list = relationship_list_first['link_list'];//array contains many relations like calls,meetings,tasks etc.

		if(link_list.length > 0){

		var link_list_first = link_list[0];
		var first_rel_module_name = link_list_first.name;
		var link_list_first_records = link_list_first['records'];
		var records_length = link_list_first_records.length;

		for(i=0;i<records_length;i++){
		var parent_name = link_list_first_records[i].link_value.name.value;
		var parent_id   = link_list_first_records[i].link_value.id.value;
		}

                }
                 $scope.parent_name = parent_name;
                 $scope.parent_id   = parent_id;

                var data = dataa['entry_list'];
                $scope.opportunityDetail = data[0].name_value_list;
                $scope.detailStatus = true;
                Opportunities.detail = data[0].name_value_list;
                Opportunities.parent_id = parent_id;


                $scope.networkOfflineStatus = false;
                $scope.opportunityRelate = {};
                $scope.relateStatus = {};
                getAccountRelated(data[0].name_value_list.id.value, 'contacts', Contacts);
                getAccountRelated(data[0].name_value_list.id.value, 'calls', Calls);
                getAccountRelated(data[0].name_value_list.id.value, 'meetings', Meetings);
                getAccountRelated(data[0].name_value_list.id.value, 'tasks', Tasks);
            }).error(errorInLoading)
        }

        function getAccountRelated(id, linkName, factory) {
            var fieldList = factory.fieldList;
            Opportunities.getRelatedList($scope.loginData, id, linkName, fieldList).success(function (data) {
                $scope.opportunityRelate[linkName] = data;
                $scope.relateStatus[linkName] = true;
                $scope.relateStatus[linkName + 'Collapsed'] = true;
            });
        }

        $scope.updateOpportunityInline = function (data) {
            Opportunities.inlineEdit($scope.loginData, $scope.opportunityDetail.id.value, $scope.updatableField, data).success(function (data) {
                $scope.opportunityDetail[$scope.updatableField] = data[$scope.updatableField];
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('OpportunitiesCreateController', ['$scope', '$stateParams', '$state', 'Opportunities', 'Accounts', 'Users', function ($scope, $stateParams, $state, Opportunities, Accounts, Users) {
        //Call To get the list of all registered users.
        getUsers($scope.loginData);

        //Function To get the list of all registered users.
        function getUsers(user) {
            if (Users.list === '') {
                Users.getList(user).success(function (data) {
                    Users.list = data;
                    $scope.users = Users.list;
                }).error(errorInLoading)
            } else {
                $scope.users = Users.list;
            }
        }

        if (deviceWidth > 200 & deviceWidth < 599) {
            $('select.form-control').removeClass('input-lg').removeClass('form-control');
        }

        if ($stateParams.type === 'new') {
            $scope.type = 'Create';
            $scope.opportunity = {
                "sales_stage":
                        {
                            "name": "sales_stage",
                            "value": "Prospecting"
                        },
                "assigned_user_id":
                        {
                            "name": 'assigned_user_id',
                            "value": $scope.loginData.loggedUserID
                        }
            }
        } else if ($stateParams.type === 'edit') {
            $scope.opportunity = Opportunities.detail;
            $scope.type = 'Edit';
            $scope.parent_id = Opportunities.parent_id;
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        $scope.salesStages = Opportunities.salesStages;

   getAccountList($scope.loginData);
        function getAccountList(user) {
            Accounts.getList(user).success(function (data) {
                $scope.accountList = data;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.save = function (opportunity) {
            Opportunities.setDetail($scope.loginData, opportunity).success(function (data) {
                $scope.id = data.id;
                $state.transitionTo('home.opportunities.detail', {id: $scope.id});
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.reset = function () {
            $scope.opportunity = ''
        }
    }])

/*
 * CALLS
 */
app.controller('CallsController', ['$scope', '$state', function ($scope, $state) {
        $scope.activeState = $state.current.name;
    }])

app.controller('CallsListController', ['$scope', '$state', 'Calls', 'Pagination', function ($scope, $state, Calls, Pagination) {
        $scope.pagination = Pagination.getNew(7);
        $scope.listStatus = false;
        //For Snap Drawers
        $scope.opts = {
            disable: 'right'
        };
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
            $scope.calls = Calls.list;
            $scope.listStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            getCalls($scope.loginData);
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
            $scope.calls = Calls.list;
            $scope.listStatus = true;
        }

        function getCalls(user) {
            var callsQuery = "calls.assigned_user_id = '" + user.loggedUserID + "'";
            Calls.getList(user, callsQuery).success(function (data) {
                if (data.length === 0) {
                    $scope.emptyList = true;
                }
                $scope.calls = data;
                Calls.list = data;
                $scope.pagination.numPages = Math.ceil($scope.calls.length / $scope.pagination.perPage);
                $scope.listStatus = true;
                $scope.count = $scope.calls.length;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('CallsDetailController', ['$scope', '$stateParams', '$state', 'Calls', 'Accounts', 'Contacts', 'Opportunities', function ($scope, $stateParams, $state, Calls, Accounts, Contacts, Opportunities) {
        $scope.moreInfoTable = true;
        $scope.timeInfoTable = false;
        $scope.remindersInfoTable = false;
        $scope.minimiseDetails = false;
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            if ($stateParams.id !== '') {
                getCallDetail($stateParams.id);
            } else {
                $scope.detailStatus = false;
            }
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        $scope.statuses = Calls.statuses;
        $scope.directions = Calls.directions;

        function getCallDetail(id) {
            Calls.getDetail($scope.loginData, id).success(function (data) {
                $scope.callDetail = data[0].name_value_list;
                $scope.date_start = moment(data[0].name_value_list.date_start.value).format('Do MMM YYYY');
                $scope.date_start_time = moment(data[0].name_value_list.date_start.value).format('hh:mm a');
                $scope.date_start_stamp = moment(data[0].name_value_list.date_start.value).toISOString();
                $scope.date_end = moment(data[0].name_value_list.date_end.value).format('Do MMM YYYY');
                $scope.date_end_time = moment(data[0].name_value_list.date_end.value).format('hh:mm a');
                $scope.date_end_stamp = moment(data[0].name_value_list.date_end.value).toISOString();
                var reminder_time = parseInt(data[0].name_value_list.reminder_time.value);
                if (reminder_time === -1) {
                    $scope.reminder_time = 'No Reminder Set';
                } else if (reminder_time >= 60 && reminder_time <= 1800) {
                    $scope.reminder_time = (reminder_time / 60) + ' Minutes Prior';
                } else if (reminder_time >= 3600 && reminder_time <= 18000) {
                    $scope.reminder_time = ((reminder_time / 60) / 60) + ' Hours Prior';
                } else if (reminder_time === 86400) {
                    '1 Day Prior';
                }

                var email_reminder_time = parseInt(data[0].name_value_list.email_reminder_time.value);
                if (email_reminder_time === -1) {
                    $scope.email_reminder_time = 'No Reminder Set';
                } else if (email_reminder_time >= 60 && email_reminder_time <= 1800) {
                    $scope.email_reminder_time = (email_reminder_time / 60) + ' Minutes Prior';
                } else if (email_reminder_time >= 3600 && email_reminder_time <= 18000) {
                    $scope.email_reminder_time = ((email_reminder_time / 60) / 60) + ' Hours Prior';
                } else if (email_reminder_time === 86400) {
                    '1 Day Prior';
                }

                $scope.detailStatus = true;
                Calls.detail = data[0].name_value_list;
                $scope.callParentType = data[0].name_value_list.parent_type.value;

//		var callParentTypeVal = data[0].name_value_list.parent_type.value;
//		if(callParentTypeVal== 'Accounts' ){
//		$scope.callParentType = 'Clients';
//		}

                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.parentDetail = function (id) {
            var parentType = $scope.callParentType;

//		if( parentType == 'Clients' ){
//		var parentType = 'Accounts';
//		}

            var detailState = 'home.' + parentType.toLowerCase() + '.detail';
            $state.transitionTo(detailState, {id: id});
        }

        $scope.updateCallDateTime = function (rawDate) {

            var date = moment(rawDate).format('YYYY-MM-D HH:mm:ss');
            $scope.date_start = moment(rawDate).format('Do MMM YYYY');
            $scope.date_start_time = moment(rawDate).format('hh:mm a');
            Calls.inlineEdit($scope.loginData, $scope.callDetail.id.value, $scope.updatableField, date).success(function (data) {
                $scope.callDetail[$scope.updatableField] = data[$scope.updatableField];
                $scope.date_end = moment($scope.callDetail.date_start.value).add('hours', $scope.callDetail.duration_hours.value).add('minutes', $scope.callDetail.duration_minutes.value).format('Do MMM YYYY');
                $scope.date_end_time = moment($scope.callDetail.date_start.value).add('hours', $scope.callDetail.duration_hours.value).add('minutes', $scope.callDetail.duration_minutes.value).format('hh:mm a');
                Calls.getList($scope.loginData).success(function (data) {
                    Calls.list = data;
                    $scope.networkOfflineStatus = false;
                }).error(errorInLoading)
            })
        }

        $scope.updateCallInline = function (data) {
            Calls.inlineEdit($scope.loginData, $scope.callDetail.id.value, $scope.updatableField, data).success(function (data) {
                $scope.callDetail[$scope.updatableField] = data[$scope.updatableField];
                $scope.date_end = moment($scope.callDetail.date_start.value).add('hours', $scope.callDetail.duration_hours.value).add('minutes', $scope.callDetail.duration_minutes.value).format('Do MMM YYYY');
                $scope.date_end_time = moment($scope.callDetail.date_start.value).add('hours', $scope.callDetail.duration_hours.value).add('minutes', $scope.callDetail.duration_minutes.value).format('hh:mm a');
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('CallsCreateController', ['$scope', '$stateParams', '$state', 'Calls', 'Accounts', 'Contacts', 'Opportunities', 'Leads', 'Users', function ($scope, $stateParams, $state, Calls, Accounts, Contacts, Opportunities, Leads, Users) {
        //Call To get the list of all registered users.
        getUsers($scope.loginData);

        //Function To get the list of all registered users.
        function getUsers(user) {
            if (Users.list === '') {
                Users.getList(user).success(function (data) {
                    Users.list = data;
                    $scope.users = Users.list;
                }).error(errorInLoading)
            } else {
                $scope.users = Users.list;
            }



        }

        if (deviceWidth > 200 & deviceWidth < 599) {
            $('select.form-control').removeClass('input-lg').removeClass('form-control');
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = false;
        }

        if ($stateParams.type === 'new') {
            $scope.type = 'Create';
            $scope.call = {
                "assigned_user_id":
                        {
                            "name": 'assigned_user_id',
                            "value": $scope.loginData.loggedUserID
                        }
            }

        } else if ($stateParams.type === 'edit') {
            $scope.call = Calls.detail;
            var parentType = $scope.call.parent_type;
            if (parentType.value !== '') {
                getParentList(parentType.value);
            }
            $scope.type = 'Edit';
            $scope.date_start = moment(Calls.detail.date_start.value).format('Do MMM YYYY HH:mm:ss');
            $scope.date_end = moment(Calls.detail.date_end.value).format('Do MMM YYYY HH:mm:ss');
        } else {
            getParentList($stateParams.type);
            $scope.call = {
                "parent_type":
                        {
                            "name": "parent_type",
                            "value": $stateParams.type
                        },
                "parent_id":
                        {
                            "name": "parent_id",
                            "value": $stateParams.parentid
                        },
                "assigned_user_id":
                        {
                            name: 'assigned_user_id',
                            value: $scope.loginData.loggedUserID
                        }
            }
            $scope.type = 'Create';
        }

        //Initiating the create view drop downs.
        $scope.statuses = Calls.statuses;
        $scope.directions = Calls.directions;
        $scope.parentTypes = Calls.parentTypes;
        $scope.reminders = Calls.reminders;

        function getParentList(module) {
            $scope.relatedTo = true;
            $scope.parentListStatus = false;
            if (module === 'Accounts') {
                if (Accounts.list === '') {
                    Accounts.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Accounts.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Accounts.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === 'Contacts') {
                if (Contacts.list === '') {
                    Contacts.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Contacts.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Contacts.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === 'Opportunities') {
                if (Opportunities.list === '') {
                    Opportunities.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Opportunities.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Opportunities.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === 'Leads') {
                if (Leads.list === '') {
                    Leads.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Leads.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Leads.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === '') {
                $scope.parentListStatus = true;
            } else {
                $scope.parentListStatus = false;
            }
        }

        $scope.save = function (call) {
//            if (call.email_reminder_time.value !== '-1') {
//                $scope.call.email_reminder_sent = {
//                    'name': 'email_reminder_sent',
//                    'value': '0'
//                }
//            }
             
            Calls.setDetail($scope.loginData, call).success(function (data) {

                $scope.id = data.id;
                Calls.getList($scope.loginData).success(function (data) {
                    Calls.list = data;
                    $scope.networkOfflineStatus = false;
                }).error(errorInLoading)
                $state.transitionTo('home.calls.detail', {id: $scope.id});
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.reset = function () {
            $scope.call = ''
        }

        $scope.dateStartTimeSet = function (newDate, oldDate) {
            $scope.date_start = moment(newDate).format('MMM Do YYYY, HH:mm:ss')

            var date = {
                "name": "date_start",
                "value": moment(newDate).format('YYYY-MM-D HH:mm:ss')
            }
            $scope.call.date_start = date;
        }

        $scope.onSelectRelatedTo = function (module) {
            getParentList(module);
        }

        $scope.onEmailReminderChange = function () {
            $scope.call.email_reminder_sent = {
                'name': 'email_reminder_sent',
                'value': '0'
            }
        }

    }])

/*
 * MEETINGS
 */
app.controller('MeetingsController', ['$scope', '$state', function ($scope, $state) {
        $scope.activeState = $state.current.name;
    }])

app.controller('MeetingsListController', ['$scope', 'Meetings', 'Pagination', function ($scope, Meetings, Pagination) {
        $scope.pagination = Pagination.getNew(7);
        $scope.listStatus = false;
        //For Snap Drawers
        $scope.opts = {
            disable: 'right'
        };
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
            $scope.meetings = Meetings.list;
            $scope.listStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            getMeetings($scope.loginData);
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
            $scope.meetings = Meetings.list;
            $scope.listStatus = true;
        }

        function getMeetings(user) {
            var meetingsQuery = "meetings.assigned_user_id = '" + user.loggedUserID + "'";
            Meetings.getList(user, meetingsQuery).success(function (data) {
                if (data.length === 0) {
                    $scope.emptyList = true;
                }
                $scope.meetings = data;
                Meetings.list = data;
                $scope.pagination.numPages = Math.ceil($scope.meetings.length / $scope.pagination.perPage);
                $scope.listStatus = true;
                $scope.count = $scope.meetings.length;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('MeetingsDetailController', ['$scope', '$stateParams', '$state', 'Meetings', 'Accounts', 'Contacts', 'Opportunities', function ($scope, $stateParams, $state, Meetings, Accounts, Contacts, Opportunities) {
        $scope.moreInfoTable = true;
        $scope.minimiseDetails = false;
        $scope.timeInfoTable = false;
        $scope.remindersInfoTable = false;
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            if ($stateParams.id !== '') {
                getMeetingDetail($stateParams.id);
            } else {
                $scope.detailStatus = false;
            }
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = false;
        }

        $scope.statuses = Meetings.statuses;
        $scope.directions = Meetings.directions;

        function getMeetingDetail(id) {
            Meetings.getDetail($scope.loginData, id).success(function (data) {
                $scope.meetingDetail = data[0].name_value_list;
                $scope.date_start = moment(data[0].name_value_list.date_start.value).format('Do MMM YYYY');
                $scope.date_start_time = moment(data[0].name_value_list.date_start.value).format('hh:mm a');
                $scope.date_start_stamp = moment(data[0].name_value_list.date_start.value).toISOString();
                $scope.date_end = moment(data[0].name_value_list.date_end.value).format('Do MMM YYYY');
                $scope.date_end_time = moment(data[0].name_value_list.date_end.value).format('hh:mm a');
                $scope.date_end_stamp = moment(data[0].name_value_list.date_end.value).toISOString();
                var reminder_time = parseInt(data[0].name_value_list.reminder_time.value);
                if (reminder_time === -1) {
                    $scope.reminder_time = 'No Reminder Set';
                } else if (reminder_time >= 60 && reminder_time <= 1800) {
                    $scope.reminder_time = (reminder_time / 60) + ' Minutes Prior';
                } else if (reminder_time >= 3600 && reminder_time <= 18000) {
                    $scope.reminder_time = ((reminder_time / 60) / 60) + ' Hours Prior';
                } else if (reminder_time === 86400) {
                    '1 Day Prior';
                }

                var email_reminder_time = parseInt(data[0].name_value_list.email_reminder_time.value);
                if (email_reminder_time === -1) {
                    $scope.email_reminder_time = 'No Reminder Set';
                } else if (email_reminder_time >= 60 && email_reminder_time <= 1800) {
                    $scope.email_reminder_time = (email_reminder_time / 60) + ' Minutes Prior';
                } else if (email_reminder_time >= 3600 && email_reminder_time <= 18000) {
                    $scope.email_reminder_time = ((email_reminder_time / 60) / 60) + ' Hours Prior';
                } else if (email_reminder_time === 86400) {
                    '1 Day Prior';
                }

                $scope.detailStatus = true;
                Meetings.detail = data[0].name_value_list;
                $scope.meetingParentType = data[0].name_value_list.parent_type.value;

//		var meetingParentTypeVal = data[0].name_value_list.parent_type.value;
//		if(meetingParentTypeVal== 'Accounts' ){
//		$scope.meetingParentType = 'Clients';
//		}

                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.parentDetail = function (id) {
            var parentType = $scope.meetingParentType;

//		if( parentType == 'Clients' ){
//		var parentType = 'Accounts';
//		}

            var detailState = 'home.' + parentType.toLowerCase() + '.detail';
            $state.transitionTo(detailState, {id: id});
        }

        $scope.updateMeetingDateTime = function (rawDate) {
            var date = moment(rawDate).format('YYYY-MM-D HH:mm:ss');
            $scope.date_start = moment(rawDate).format('Do MMM YYYY');
            $scope.date_start_time = moment(rawDate).format('hh:mm a');
            Meetings.inlineEdit($scope.loginData, $scope.meetingDetail.id.value, $scope.updatableField, date).success(function (data) {
                $scope.meetingDetail[$scope.updatableField] = data[$scope.updatableField];
                $scope.date_end = moment($scope.meetingDetail.date_start.value).add('hours', $scope.meetingDetail.duration_hours.value).add('minutes', $scope.meetingDetail.duration_minutes.value).format('Do MMM YYYY');
                $scope.date_end_time = moment($scope.meetingDetail.date_start.value).add('hours', $scope.meetingDetail.duration_hours.value).add('minutes', $scope.meetingDetail.duration_minutes.value).format('hh:mm a');
                Meetings.getList($scope.loginData).success(function (data) {
                    Meetings.list = data;
                    $scope.networkOfflineStatus = false;
                }).error(errorInLoading)
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.updateMeetingInline = function (data) {
            Meetings.inlineEdit($scope.loginData, $scope.meetingDetail.id.value, $scope.updatableField, data).success(function (data) {
                $scope.meetingDetail[$scope.updatableField] = data[$scope.updatableField];
                $scope.date_end = moment($scope.meetingDetail.date_start.value).add('hours', $scope.meetingDetail.duration_hours.value).add('minutes', $scope.meetingDetail.duration_minutes.value).format('Do MMM YYYY');
                $scope.date_end_time = moment($scope.meetingDetail.date_start.value).add('hours', $scope.meetingDetail.duration_hours.value).add('minutes', $scope.meetingDetail.duration_minutes.value).format('hh:mm a');
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('MeetingsCreateController', ['$scope', '$stateParams', '$state', 'Meetings', 'Accounts', 'Contacts', 'Opportunities', 'Leads', 'Users', function ($scope, $stateParams, $state, Meetings, Accounts, Contacts, Opportunities, Leads, Users) {
        //Call To get the list of all registered users.
        getUsers($scope.loginData);

        //Function To get the list of all registered users.
        function getUsers(user) {
            if (Users.list === '') {
                Users.getList(user).success(function (data) {
                    Users.list = data;
                    $scope.users = Users.list;
                }).error(errorInLoading)
            } else {
                $scope.users = Users.list;
            }

        }


        if (deviceWidth > 200 & deviceWidth < 599) {
            $('select.form-control').removeClass('input-lg').removeClass('form-control');
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = false;
        }

        if ($stateParams.type === 'new') {
            $scope.type = 'Create';
            $scope.meeting = {
                "assigned_user_id":
                        {
                            "name": 'assigned_user_id',
                            "value": $scope.loginData.loggedUserID
                        }
            }
        } else if ($stateParams.type === 'edit') {
            $scope.meeting = Meetings.detail;
            var parentType = $scope.meeting.parent_type;
            if (parentType.value !== '') {
                getParentList(parentType.value);
            }
            $scope.type = 'Edit';
            $scope.date_start = moment(Meetings.detail.date_start.value).format('Do MMM YYYY HH:mm:ss');
            $scope.date_end = moment(Meetings.detail.date_end.value).format('Do MMM YYYY HH:mm:ss');
        } else {
            getParentList($stateParams.type);
            $scope.meeting = {
                "parent_type":
                        {
                            "name": "parent_type",
                            "value": $stateParams.type
                        },
                "parent_id":
                        {
                            "name": "parent_id",
                            "value": $stateParams.parentid
                        },
                "assigned_user_id":
                        {
                            name: 'assigned_user_id',
                            value: $scope.loginData.loggedUserID
                        }
            }
            $scope.type = 'Create';
        }

        //Initiating the create view drop downs.
        $scope.statuses = Meetings.statuses;
        $scope.directions = Meetings.directions;
        $scope.parentTypes = Meetings.parentTypes;
        $scope.reminders = Meetings.reminders;

        function getParentList(module) {
            $scope.relatedTo = true;
            $scope.parentListStatus = false;
            if (module === 'Accounts') {
                if (Accounts.list === '') {
                    Accounts.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Accounts.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Accounts.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === 'Contacts') {
                if (Contacts.list === '') {
                    Contacts.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Contacts.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Contacts.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === 'Opportunities') {
                if (Opportunities.list === '') {
                    Opportunities.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Opportunities.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Opportunities.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === 'Leads') {
                if (Leads.list === '') {
                    Leads.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Leads.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Leads.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else {
                $scope.parentListStatus = false;
            }
        }

        $scope.save = function (meeting) {
//            if (meeting.email_reminder_time.value !== '-1') {
//                $scope.meeting.email_reminder_sent = {
//                    'name': 'email_reminder_sent',
//                    'value': '0'
//                }
//            }

            Meetings.setDetail($scope.loginData, meeting).success(function (data) {
                $scope.id = data.id;
                Meetings.getList($scope.loginData).success(function (data) {
                    Meetings.list = data;
                    $scope.networkOfflineStatus = false;
                }).error(errorInLoading)
                $state.transitionTo('home.meetings.detail', {id: $scope.id});
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.reset = function () {
            $scope.meeting = ''
        }

        $scope.dateStartTimeSet = function (newDate, oldDate) {
            $scope.date_start = moment(newDate).format('MMM Do YYYY, HH:mm:ss')

            var date = {
                "name": "date_start",
                "value": moment(newDate).format('YYYY-MM-D HH:mm:ss')
            }
            $scope.meeting.date_start = date;
        }

   $scope.dateEndTimeSet = function (newDate, oldDate) {
            $scope.date_end = moment(newDate).format('MMM Do YYYY, HH:mm:ss')

            var date = {
                "name": "date_end",
                "value": moment(newDate).format('YYYY-MM-D HH:mm:ss')
            }
            $scope.meeting.date_end = date;
        }

        $scope.onSelectRelatedTo = function (module) {
            getParentList(module);
        }

        $scope.onEmailReminderChange = function () {
            $scope.meeting.email_reminder_sent = {
                'name': 'email_reminder_sent',
                'value': '0'
            }
        }

    }])

/*
 * TASKS
 */
app.controller('TasksController', ['$scope', '$state', function ($scope, $state) {
        $scope.activeState = $state.current.name;
    }])

app.controller('TasksListController', ['$scope', '$state', 'Tasks', 'Pagination', function ($scope, $state, Tasks, Pagination) {
        $scope.pagination = Pagination.getNew(7);
        $scope.listStatus = false;
        //For Snap Drawers
        $scope.opts = {
            disable: 'right'
        };
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
            $scope.tasks = Tasks.list;
            $scope.listStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            getTasks($scope.loginData);
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
            $scope.tasks = Tasks.list;
            $scope.listStatus = true;
        }

        function getTasks(user) {
            var tasksQuery = "tasks.assigned_user_id = '" + user.loggedUserID + "'";
            Tasks.getList(user, tasksQuery).success(function (data) {
                if (data.length === 0) {
                    $scope.emptyList = true;
                }
                $scope.tasks = data;
                Tasks.list = data;
                $scope.pagination.numPages = Math.ceil($scope.tasks.length / $scope.pagination.perPage);
                $scope.listStatus = true;
                $scope.count = $scope.tasks.length;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('TasksDetailController', ['$scope', '$stateParams', '$state', 'Tasks', 'Accounts', 'Contacts', 'Opportunities', function ($scope, $stateParams, $state, Tasks, Accounts, Contacts, Opportunities) {
        $scope.moreInfoTable = true;
        $scope.timeInfoTable = false;
        $scope.minimiseDetails = false;
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            if ($stateParams.id !== '') {
                getTaskDetail($stateParams.id);
            } else {
                $scope.detailStatus = false;
            }
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        $scope.statuses = Tasks.statuses;
        $scope.priorities = Tasks.priorities;

        function getTaskDetail(id) {
            Tasks.getDetail($scope.loginData, id).success(function (data) {
                $scope.taskDetail = data[0].name_value_list;
                $scope.date_start = moment(data[0].name_value_list.date_start.value).format('Do MMM YYYY');
                $scope.date_start_time = moment(data[0].name_value_list.date_start.value).format('hh:mm a');
                $scope.date_start_stamp = moment(data[0].name_value_list.date_start.value).toISOString();
                $scope.date_due = moment(data[0].name_value_list.date_due.value).format('Do MMM YYYY');
                $scope.date_due_time = moment(data[0].name_value_list.date_due.value).format('hh:mm a');
                $scope.date_due_stamp = moment(data[0].name_value_list.date_due.value).toISOString();
                $scope.detailStatus = true;
                Tasks.detail = data[0].name_value_list;
                $scope.detailStatus = true;
                $scope.taskParentType = data[0].name_value_list.parent_type.value;

//              var taskParentTypeVal = data[0].name_value_list.parent_type.value;
//		if(taskParentTypeVal== 'Accounts' ){
//		$scope.taskParentType = 'Clients';
//		}

                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.parentDetail = function (id) {
            var parentType = $scope.taskParentType;

//		if( parentType == 'Clients' ){
//		var parentType = 'Accounts';
//		}

            var detailState = 'home.' + parentType.toLowerCase() + '.detail';
            $state.transitionTo(detailState, {id: id});
        }

        $scope.updateTaskDateTime = function (rawDate) {
            var date = moment(rawDate).format('YYYY-MM-D HH:mm:ss');
            $scope.date_start = moment(rawDate).format('Do MMM YYYY');
            $scope.date_start_time = moment(rawDate).format('hh:mm a');
            Tasks.inlineEdit($scope.loginData, $scope.taskDetail.id.value, $scope.updatableField, date).success(function (data) {
                $scope.taskDetail[$scope.updatableField] = data[$scope.updatableField];


//                $scope.date_due = moment($scope.taskDetail.date_start.value).add('hours', $scope.taskDetail.duration_hours.value).add('minutes', $scope.taskDetail.duration_minutes.value).format('Do MMM YYYY');
//                $scope.date_due_time = moment($scope.taskDetail.date_start.value).add('hours', $scope.taskDetail.duration_hours.value).add('minutes', $scope.taskDetail.duration_minutes.value).format('hh:mm a');

                $scope.date_start = moment($scope.taskDetail.date_start.value).format('Do MMM YYYY');
                $scope.date_start_time = moment($scope.taskDetail.date_start.value).format('hh:mm a');
                $scope.date_start_stamp = moment($scope.taskDetail.date_start.value).toISOString();
                $scope.date_due = moment($scope.taskDetail.date_due.value).format('Do MMM YYYY');
                $scope.date_due_time = moment($scope.taskDetail.date_due.value).format('hh:mm a');
                $scope.date_due_stamp = moment($scope.taskDetail.date_due.value).toISOString();


                Tasks.getList($scope.loginData).success(function (data) {
                    Tasks.list = data;
                    $scope.networkOfflineStatus = false;
                }).error(errorInLoading)
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.updateTaskInline = function (data) {
            Tasks.inlineEdit($scope.loginData, $scope.taskDetail.id.value, $scope.updatableField, data).success(function (data) {
                $scope.taskDetail[$scope.updatableField] = data[$scope.updatableField];


//                $scope.date_due = moment($scope.taskDetail.date_start.value).add('hours', $scope.taskDetail.duration_hours.value).add('minutes', $scope.taskDetail.duration_minutes.value).format('Do MMM YYYY');
//                $scope.date_due_time = moment($scope.taskDetail.date_start.value).add('hours', $scope.taskDetail.duration_hours.value).add('minutes', $scope.taskDetail.duration_minutes.value).format('hh:mm a');

                $scope.date_start = moment($scope.taskDetail.date_start.value).format('Do MMM YYYY');
                $scope.date_start_time = moment($scope.taskDetail.date_start.value).format('hh:mm a');
                $scope.date_start_stamp = moment($scope.taskDetail.date_start.value).toISOString();
                $scope.date_due = moment($scope.taskDetail.date_due.value).format('Do MMM YYYY');
                $scope.date_due_time = moment($scope.taskDetail.date_due.value).format('hh:mm a');
                $scope.date_due_stamp = moment($scope.taskDetail.date_due.value).toISOString();

                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('TasksCreateController', ['$scope', '$stateParams', '$state', 'Tasks', 'Accounts', 'Contacts', 'Opportunities', 'Leads', 'Users', function ($scope, $stateParams, $state, Tasks, Accounts, Contacts, Opportunities, Leads, Users) {
        //Call To get the list of all registered users.
        getUsers($scope.loginData);

        //Function To get the list of all registered users.
        function getUsers(user) {
            if (Users.list === '') {
                Users.getList(user).success(function (data) {
                    Users.list = data;
                    $scope.users = Users.list;
                }).error(errorInLoading)
            } else {
                $scope.users = Users.list;
            }
        }

        if (deviceWidth > 200 & deviceWidth < 599) {
            $('select.form-control').removeClass('input-lg').removeClass('form-control');
        }

        if ($stateParams.type === 'new') {
            $scope.type = 'Create';
            $scope.task = {
                "assigned_user_id":
                        {
                            "name": 'assigned_user_id',
                            "value": $scope.loginData.loggedUserID
                        }
            }
            getContactList();
        } else if ($stateParams.type === 'edit') {
            $scope.task = Tasks.detail;
            var parentType = $scope.task.parent_type;
            if (parentType.value !== '') {
                getParentList(parentType.value);
            }
            $scope.type = 'Edit';
            $scope.date_start = moment(Tasks.detail.date_start.value).format('Do MMM YYYY HH:mm:ss');
            $scope.date_due = moment(Tasks.detail.date_due.value).format('Do MMM YYYY HH:mm:ss');
            getContactList();
        } else {
            getParentList($stateParams.type);
            $scope.task = {
                "parent_type":
                        {
                            "name": "parent_type",
                            "value": $stateParams.type
                        },
                "parent_id":
                        {
                            "name": "parent_id",
                            "value": $stateParams.parentid
                        },
                "assigned_user_id":
                        {
                            name: 'assigned_user_id',
                            value: $scope.loginData.loggedUserID
                        }
            }
            $scope.type = 'Create';
            getContactList();
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        //Initiating the create view drop downs.
        $scope.statuses = Tasks.statuses;
        $scope.priorities = Tasks.priorities;
        $scope.parentTypes = Tasks.parentTypes;

        function getParentList(module) {
            $scope.relatedTo = true;
            $scope.parentListStatus = false;
            if (module === 'Accounts') {
                if (Accounts.list === '') {
                    Accounts.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Accounts.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Accounts.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === 'Contacts') {
                if (Contacts.list === '') {
                    Contacts.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Contacts.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Contacts.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === 'Opportunities') {
                if (Opportunities.list === '') {
                    Opportunities.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Opportunities.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Opportunities.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else if (module === 'Leads') {
                if (Leads.list === '') {
                    Leads.getList($scope.loginData).success(function (data) {
                        $scope.parentList = data;
                        $scope.parentListStatus = true;
                        $scope.relatedTo = false;
                        Leads.list = data;
                        $scope.networkOfflineStatus = false;
                    }).error(errorInLoading)
                } else {
                    $scope.parentList = Leads.list;
                    $scope.parentListStatus = true;
                    $scope.relatedTo = false;
                }
            } else {
                $scope.parentListStatus = false;
            }
        }

        function getContactList() {
            if (Contacts.list === '') {
                Contacts.getList($scope.loginData).success(function (data) {
                    $scope.contacts = data;
                    Contacts.list = data;
                    $scope.contactListStatus = true;
                    $scope.networkOfflineStatus = false;
                }).error(errorInLoading)
            } else {
                $scope.contacts = Contacts.list;
            }
        }

        $scope.save = function (task) {
            Tasks.setDetail($scope.loginData, task).success(function (data) {
                $scope.id = data.id;
                Tasks.getList($scope.loginData).success(function (data) {
                    Tasks.list = data;
                    $scope.networkOfflineStatus = false;
                }).error(errorInLoading)
                $state.transitionTo('home.tasks.detail', {id: $scope.id});
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.reset = function () {
            $scope.task = ''
        }

        $scope.dateStartTimeSet = function (newDate, oldDate) {
            $scope.date_start = moment(newDate).format('MMM Do YYYY, HH:mm:ss')

            var date = {
                "name": "date_start",
                "value": moment(newDate).format('YYYY-MM-D HH:mm:ss')
            }
            $scope.task.date_start = date;
        }

        $scope.dateDueTimeSet = function (newDate, oldDate) {
            $scope.date_due = moment(newDate).format('MMM Do YYYY, HH:mm:ss')

            var date = {
                "name": "date_due",
                "value": moment(newDate).format('YYYY-MM-D HH:mm:ss')
            }
            $scope.task.date_due = date;
        }

        $scope.onSelectRelatedTo = function (module) {
            getParentList(module);
        }
    }])

/*
 * LEADS
 */
app.controller('LeadsController', ['$scope', '$state', function ($scope, $state) {
        $scope.activeState = $state.current.name;
    }])

app.controller('LeadsListController', ['$scope', '$state', 'Leads', 'Pagination', function ($scope, $state, Leads, Pagination) {
        $scope.pagination = Pagination.getNew(7);
        $scope.listStatus = false;
        //For Snap Drawers
        $scope.opts = {
            disable: 'right'
        };        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
            $scope.leads = Leads.list;
            $scope.listStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            getLeads($scope.loginData);
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
            $scope.leads = Leads.list;
            $scope.listStatus = true;
        }

        function getLeads(user) {
            var leadsQuery = "leads.assigned_user_id = '" + user.loggedUserID + "'";
            //var leadsQuery = "leads.assigned_user_id = '" + user.loggedUserID + "'";
            Leads.getList(user, leadsQuery).success(function (data) {
                if (data.length === 0) {
                    $scope.emptyList = true;
                }
                $scope.leads = data;
                Leads.list = data;
                $scope.pagination.numPages = Math.ceil($scope.leads.length / $scope.pagination.perPage);
                $scope.listStatus = true;
                $scope.count = $scope.leads.length;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
    }])

app.controller('LeadsDetailController', ['$scope', '$stateParams', '$state', 'Leads', 'Accounts', 'Calls', 'Meetings', 'Tasks', function ($scope, $stateParams, $state, Leads, Accounts, Calls, Meetings, Tasks) {
        $scope.smsBodyTemplate = 'Hi,%20Thanks%20for%20taking%20interest%20in%20our%20products%20and%20services.';
        $scope.leadInfoTable = true;
        $scope.moreInfoTable = false;
        $scope.minimiseDetails = false;
        $scope.primaryInfoTable = false;
        $scope.altInfoTable = false;
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            if ($stateParams.id !== '') {
                getLeadDetail($stateParams.id);
            } else {
                $scope.detailStatus = false;
                $scope.leadAccountStatus = false;
            }
        }

        $scope.statuses = Leads.statuses;

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        function getLeadDetail(id) {
            Leads.getDetail($scope.loginData, id).success(function (data) {
                $scope.leadDetail = data[0].name_value_list;
                Leads.detail = data[0].name_value_list;
                $scope.detailStatus = true;
                $scope.networkOfflineStatus = false;
                $scope.leadRelate = {};
                $scope.relateStatus = {};
                getLeadRelated(data[0].name_value_list.id.value, 'calls', Calls);
                getLeadRelated(data[0].name_value_list.id.value, 'meetings', Meetings);
                getLeadRelated(data[0].name_value_list.id.value, 'tasks', Tasks);
            }).error(errorInLoading)
        }
        
        function getLeadRelated(id, linkName, factory) {
            var fieldList = factory.fieldList;
            Leads.getRelatedList($scope.loginData, id, linkName, fieldList).success(function (data) {
                $scope.leadRelate[linkName] = data;
                $scope.relateStatus[linkName] = true;
                $scope.relateStatus[linkName + 'Collapsed'] = true;
            });
        }

        $scope.updateLeadInline = function (data) {
            Leads.inlineEdit($scope.loginData, $scope.leadDetail.id.value, $scope.updatableField, data).success(function (data) {
                $scope.leadDetail[$scope.updatableField] = data[$scope.updatableField];
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.setActiveNumber = function (number) {
            $scope.activeNumber = number;
        }


    }])

app.controller('LeadsCreateController', ['$scope', '$stateParams', '$state', 'Leads', 'Accounts', 'Users', function ($scope, $stateParams, $state, Leads, Accounts, Users) {
        //Call To get the list of all registered users.
        getUsers($scope.loginData);

        //Function To get the list of all registered users.
        function getUsers(user) {
            if (Users.list === '') {
                Users.getList(user).success(function (data) {
                    Users.list = data;
                    $scope.users = Users.list;
                }).error(errorInLoading)
            } else {
                $scope.users = Users.list;
            }
        }

        $scope.cfbStatus = false;
        if (deviceWidth > 200 & deviceWidth < 599) {
            $('select.form-control').removeClass('input-lg').removeClass('form-control');
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        $scope.statuses = Leads.statuses;

        getAccountList($scope.loginData);
        function getAccountList(user) {
            Accounts.getList(user).success(function (data) {
                $scope.accountList = data;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }
        if ($stateParams.type === 'new') {
            $scope.type = 'Create';
            $scope.lead = {
                "assigned_user_id":
                        {
                            "name": 'assigned_user_id',
                            "value": $scope.loginData.loggedUserID
                        }
            }
            $scope.phone_office_status = false;
            $scope.phone_other_status = false;
            $scope.phone_mobile_status = false;
        } else if ($stateParams.type === 'edit') {
            $scope.lead = Leads.detail;
            $scope.type = 'Edit';
            $scope.phone_office_status = false;
            $scope.phone_other_status = false;
            $scope.phone_mobile_status = false;
        }

        $scope.save = function (lead) {
            Leads.setDetail($scope.loginData, lead).success(function (data) {
                $scope.id = data.id;
                $state.transitionTo('home.leads.detail', {id: $scope.id});
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        $scope.reset = function () {
            $scope.lead = ''
        }

        $scope.copyFromPrimaryReal = function (lead) {
            if ($scope.cfbStatus) {
                var primary_address_street = lead.primary_address_street;
                var primary_address_city = lead.primary_address_city;
                var primary_address_state = lead.primary_address_state;
                var primary_address_country = lead.primary_address_country;
                var primary_address_postalcode = lead.primary_address_postalcode;

                if (primary_address_street) {
                    lead.alt_address_street = {
                        name: 'alt_address_street',
                        value: primary_address_street.value
                    };
                }
                if (primary_address_city) {
                    lead.alt_address_city = {
                        name: 'alt_address_city',
                        value: primary_address_city.value
                    };
                }
                if (primary_address_state) {
                    lead.alt_address_state = {
                        name: 'alt_address_state',
                        value: primary_address_state.value
                    };
                }
                if (primary_address_country) {
                    lead.alt_address_country = {
                        name: 'alt_address_country',
                        value: primary_address_country.value
                    };
                }
                if (primary_address_postalcode) {
                    lead.alt_address_postalcode = {
                        name: 'alt_address_postalcode',
                        value: primary_address_postalcode.value
                    };
                }
            }
        }

        $scope.copyFromPrimary = function (lead) {
            $scope.cfbStatus = !$scope.cfbStatus;
            if ($scope.cfbStatus) {
                var primary_address_street = lead.primary_address_street;
                var primary_address_city = lead.primary_address_city;
                var primary_address_state = lead.primary_address_state;
                var primary_address_country = lead.primary_address_country;
                var primary_address_postalcode = lead.primary_address_postalcode;

                if (primary_address_street) {
                    lead.alt_address_street = {
                        name: 'alt_address_street',
                        value: primary_address_street.value
                    };
                }
                if (primary_address_city) {
                    lead.alt_address_city = {
                        name: 'alt_address_city',
                        value: primary_address_city.value
                    };
                }
                if (primary_address_state) {
                    lead.alt_address_state = {
                        name: 'alt_address_state',
                        value: primary_address_state.value
                    };
                }
                if (primary_address_country) {
                    lead.alt_address_country = {
                        name: 'alt_address_country',
                        value: primary_address_country.value
                    };
                }
                if (primary_address_postalcode) {
                    lead.alt_address_postalcode = {
                        name: 'alt_address_postalcode',
                        value: primary_address_postalcode.value
                    };
                }
            } else {
                lead.alt_address_street = {
                    name: 'alt_address_street',
                    value: ''
                };
                lead.alt_address_city = {
                    name: 'alt_address_city',
                    value: ''
                };
                lead.alt_address_state = {
                    name: 'alt_address_state',
                    value: ''
                };
                lead.alt_address_country = {
                    name: 'alt_address_country',
                    value: ''
                };
                lead.alt_address_postalcode = {
                    name: 'alt_address_postalcode',
                    value: ''
                };
            }

        }
    }])

app.controller('LeadsConvertController', ['$scope', '$state', 'Leads', 'Users', 'Accounts', 'Contacts', 'Opportunities', function ($scope, $state, Leads, Users, Accounts, Contacts, Opportunities) {

        $scope.salesStages = Opportunities.salesStages;
        $scope.tabStatus = 'accounts';
        //For Snap Drawers
        $scope.opts = {
            disable: 'left',
        };

        $scope.leadConverted = false;

        //Call To get the list of all registered users.
        getUsers($scope.loginData);

        //Function To get the list of all registered users.
        function getUsers(user) {

            if (Users.list === '') {
                Users.getList(user).success(function (data) {
                    Users.list = data;
                    $scope.users = Users.list;
                }).error(errorInLoading)
            } else {
                $scope.users = Users.list;
            }
        }

        getAccountList($scope.loginData);
        function getAccountList(user) {
            Accounts.getList(user).success(function (data) {
                $scope.accountList = data;
                $scope.networkOfflineStatus = false;
            }).error(errorInLoading)
        }

        function errorInLoading() {
            $scope.networkOfflineStatus = true;
        }

        function populateFields() {
            $scope.account = {
                name: {
                    name: 'name',
                    value: Leads.detail.account_name.value
                },
                email1: {
                    name: 'email1',
                    value: Leads.detail.email1.value
                },
                website: {
                    name: 'website',
                    value: Leads.detail.website.value
                },
                phone_office: {
                    name: 'phone_office',
                    value: Leads.detail.phone_work.value
                },
                phone_alternate: {
                    name: 'phone_alternate',
                    value: Leads.detail.phone_other.value
                },
                billing_address_street: {
                    name: 'billing_address_street',
                    value: Leads.detail.primary_address_street.value
                },
                billing_address_city: {
                    name: 'billing_address_city',
                    value: Leads.detail.primary_address_city.value
                },
                billing_address_state: {
                    name: 'billing_address_state',
                    value: Leads.detail.primary_address_state.value
                },
                billing_address_country: {
                    name: 'billing_address_country',
                    value: Leads.detail.primary_address_country.value
                },
                billing_address_postalcode: {
                    name: 'billing_address_postalcode',
                    value: Leads.detail.primary_address_postalcode.value
                },
                shipping_address_street: {
                    name: 'shipping_address_street',
                    value: Leads.detail.alt_address_street.value
                },
                shipping_address_city: {
                    name: 'shipping_address_city',
                    value: Leads.detail.alt_address_city.value
                },
                shipping_address_state: {
                    name: 'shipping_address_state',
                    value: Leads.detail.alt_address_state.value
                },
                shipping_address_country: {
                    name: 'shipping_address_country',
                    value: Leads.detail.alt_address_country.value
                },
                shipping_address_postalcode: {
                    name: 'shipping_address_postalcode',
                    value: Leads.detail.alt_address_postalcode.value
                },
                "assigned_user_id": {
                    "name": 'assigned_user_id',
                    "value": $scope.loginData.loggedUserID
                }
            }
            $scope.contact = {
                first_name: {
                    name: 'first_name',
                    value: Leads.detail.first_name.value
                },
                last_name: {
                    name: 'last_name',
                    value: Leads.detail.last_name.value
                },
                title: {
                    name: 'title',
                    value: Leads.detail.title.value
                },
                phone_mobile: {
                    name: 'phone_mobile',
                    value: Leads.detail.phone_mobile.value
                },
                "assigned_user_id": {
                    "name": 'assigned_user_id',
                    "value": $scope.loginData.loggedUserID
                }
            }

var opportunity_name = Leads.detail.first_name.value+' '+Leads.detail.last_name.value;

                $scope.opportunity = {
                name: {
                    name: 'name',
                    value: opportunity_name
                },
                sales_stage: {
                    name: 'sales_stage',
                    value: 'Prospecting'
                },
                "assigned_user_id": {
                    "name": 'assigned_user_id',
                    "value": $scope.loginData.loggedUserID
                }
            }
        }

        if (deviceWidth > 200 & deviceWidth < 599) {
            $('select.form-control').removeClass('input-lg').removeClass('form-control');
        }

        $scope.leadDetail = Leads.detail;
        //Check Online/Offline status of the app
        if (navigator.connection.type === Connection.NONE) {
            $scope.networkOfflineStatus = true;
        } else {
            $scope.networkOfflineStatus = false;
            if (Leads.detail !== '') {
                populateFields();
            }
            $scope.convertStatus = true;
        }

        $scope.makeActive = function (module) {
            $scope.tabStatus = module;
        }

        $scope.convert = function () {
            Accounts.setDetail($scope.loginData, $scope.account).success(function (data) {
                $scope.accountID = data.id;
                $scope.accountName = data.entry_list.name.value;
                $scope.contact.account_id = {
                    'name': 'account_id',
                    'value': $scope.accountID
                }
                Leads.detail.account_id = {
                    name: 'account_id',
                    value: $scope.accountID
                }
                Leads.detail.status = {
                    name: 'status',
                    value: 'Converted'
                }
                Contacts.setDetail($scope.loginData, $scope.contact).success(function (data) {
                    $scope.contactID = data.id;
                    $scope.contactFirstName = data.entry_list.first_name.value;
                    $scope.contactLastName  = data.entry_list.last_name.value;
                Opportunities.setDetail($scope.loginData, $scope.opportunity).success(function (data) {
                    $scope.opportunityID   = data.id;
                    $scope.opportunityName = data.entry_list.name.value;

                    Leads.setDetail($scope.loginData, Leads.detail).success(function (data) {
                        $scope.leadConverted = true;
                        $scope.networkOfflineStatus = false;
                        Leads.detail = '';
                     }).error(errorInLoading)
                   }).error(errorInLoading)
                }).error(errorInLoading)
            }).error(errorInLoading)
        }

        $scope.copyFromBillingReal = function (account) {
            if ($scope.cfbStatus) {
                var billing_address_street = account.billing_address_street;
                var billing_address_city = account.billing_address_city;
                var billing_address_state = account.billing_address_state;
                var billing_address_country = account.billing_address_country;
                var billing_address_postalcode = account.billing_address_postalcode;

                if (billing_address_street) {
                    account.shipping_address_street = {
                        name: 'shipping_address_street',
                        value: billing_address_street.value
                    };
                }
                if (billing_address_city) {
                    account.shipping_address_city = {
                        name: 'shipping_address_city',
                        value: billing_address_city.value
                    };
                }
                if (billing_address_state) {
                    account.shipping_address_state = {
                        name: 'shipping_address_state',
                        value: billing_address_state.value
                    };
                }
                if (billing_address_country) {
                    account.shipping_address_country = {
                        name: 'shipping_address_country',
                        value: billing_address_country.value
                    };
                }
                if (billing_address_postalcode) {
                    account.shipping_address_postalcode = {
                        name: 'shipping_address_postalcode',
                        value: billing_address_postalcode.value
                    };
                }
            }
        }

        $scope.copyFromBilling = function (account) {
            $scope.cfbStatus = !$scope.cfbStatus;
            if ($scope.cfbStatus) {
                var billing_address_street = account.billing_address_street;
                var billing_address_city = account.billing_address_city;
                var billing_address_state = account.billing_address_state;
                var billing_address_country = account.billing_address_country;
                var billing_address_postalcode = account.billing_address_postalcode;

                if (billing_address_street) {
                    account.shipping_address_street = {
                        name: 'shipping_address_street',
                        value: billing_address_street.value
                    };
                }
                if (billing_address_city) {
                    account.shipping_address_city = {
                        name: 'shipping_address_city',
                        value: billing_address_city.value
                    };
                }
                if (billing_address_state) {
                    account.shipping_address_state = {
                        name: 'shipping_address_state',
                        value: billing_address_state.value
                    };
                }
                if (billing_address_country) {
                    account.shipping_address_country = {
                        name: 'shipping_address_country',
                        value: billing_address_country.value
                    };
                }
                if (billing_address_postalcode) {
                    account.shipping_address_postalcode = {
                        name: 'shipping_address_postalcode',
                        value: billing_address_postalcode.value
                    };
                }
            } else {
                account.shipping_address_street = {
                    name: 'shipping_address_street',
                    value: ''
                };
                account.shipping_address_city = {
                    name: 'shipping_address_city',
                    value: ''
                };
                account.shipping_address_state = {
                    name: 'shipping_address_state',
                    value: ''
                };
                account.shipping_address_country = {
                    name: 'shipping_address_country',
                    value: ''
                };
                account.shipping_address_postalcode = {
                    name: 'shipping_address_postalcode',
                    value: ''
                };
            }

        }

    }])
/*
 * MODULES FACTORIES
 */
//Accounts Data Factory
app.factory('Accounts', ['$http', 'Login', function ($http, Login) {
        var Accounts = {};
        Accounts.loginData = Login;
        Accounts.list = '';
        Accounts.fieldList = [
            'id',
            'name',
            'phone_office',
            'phone_alternate',
            'email1',
            'billing_address_street',
            'billing_address_city',
            'billing_address_state',
            'billing_address_postalcode',
            'billing_address_country',
            'shipping_address_street',
            'shipping_address_city',
            'shipping_address_state',
            'shipping_address_postalcode',
            'shipping_address_country',
            'description',
            'assigned_user_id',
            'assigned_user_name'
        ];

        Accounts.getList = function (user, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/list';
            var accountsListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Accounts',
                fieldList: JSON.stringify(Accounts.fieldList),
                maxResults: '10000',
                query: query
            };
            return $http.post(url, accountsListCallParams);
        }

        Accounts.getRelatedList = function (user, id, linkName, fieldList, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/relate';
            var accountsRelateCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Accounts',
                linkName: linkName,
                fieldList: JSON.stringify(fieldList),
                maxResults: '20',
                id: id,
                query: query
            };
            return $http.post(url, accountsRelateCallParams);
        }

        Accounts.getDetail = function (user, id) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/detail';
            var accountsListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Accounts',
                id: id
            };
            return $http.post(url, accountsListCallParams);
        }

        Accounts.setDetail = function (user, account) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/save';
            var accountsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Accounts',
                fieldData: account
            };
            return $http.post(url, accountsInlineEditParams);
        }

        Accounts.inlineEdit = function (user, id, name, value) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/inline';
            var accountsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Accounts',
                id: id,
                name: name,
                value: value
            };
            return $http.post(url, accountsInlineEditParams);
        }

        return Accounts;
    }])

//Contacts Data Factory
app.factory('Contacts', ['$http', 'Login', function ($http, Login) {
        var Contacts = {};
        Contacts.loginData = Login;
        Contacts.list = '';
        Contacts.fieldList = [
            'id',
            'name',
            'first_name',
            'last_name',
            'title',
            'email1',
            'phone_mobile',
            'account_id',
            'description',
            'assigned_user_id'
        ];

        Contacts.getList = function (user, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/list';
            var contactsListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Contacts',
                fieldList: JSON.stringify(Contacts.fieldList),
                maxResults: '10000',
                query: query
            };
            return $http.post(url, contactsListCallParams);
        }

        Contacts.getDetail = function (user, id) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/detail';
            var contactsListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Contacts',
                id: id
            };
            return $http.post(url, contactsListCallParams);
        }

        Contacts.getRelatedList = function (user, id, linkName, fieldList, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/relate';
            var contactsRelateCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Contacts',
                linkName: linkName,
                fieldList: JSON.stringify(fieldList),
                maxResults: '20',
                id: id,
                query: query
            };
            return $http.post(url, contactsRelateCallParams);
        }

        Contacts.setDetail = function (user, contact) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/save';
            var contactsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Contacts',
                fieldData: contact
            };
            return $http.post(url, contactsInlineEditParams);
        }

        Contacts.inlineEdit = function (user, id, name, value) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/inline';
            var contactsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Contacts',
                id: id,
                name: name,
                value: value
            };
            return $http.post(url, contactsInlineEditParams);
        }

        return Contacts;
    }])

//Opportunities Data Factory
app.factory('Opportunities', ['$http', 'Login', function ($http, Login) {
        var Opportunities = {};
        Opportunities.loginData = Login;
        Opportunities.list = '';
        Opportunities.fieldList = [
            'id',
            'name',
            'sales_stage',
            'amount',
            'probability',
            'description',
            'assigned_user_id',
            'account_name',
            'account_id'
        ];

        Opportunities.salesStages = [
            {name: 'Prospecting', value: 'Prospecting'},
            {name: 'Qualification', value: 'Qualification'},
            {name: 'Needs Analysis', value: 'Needs Analysis'},
            {name: 'Value Proposition', value: 'Value Proposition'},
            {name: 'Id. Decision Makers', value: 'Id. Decision Makers'},
            {name: 'Perception Analysis', value: 'Perception Analysis'},
            {name: 'Proposal/Price Quote', value: 'Proposal/Price Quote'},
            {name: 'Negotiation/Review', value: 'Negotiation/Review'},
            {name: 'Closed Won', value: 'Closed Won'},
            {name: 'Closed Lost', value: 'Closed Lost'},
        ];




        Opportunities.getList = function (user, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/list';
            var opportunitiesListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Opportunities',
                fieldList: JSON.stringify(Opportunities.fieldList),
                maxResults: '10000',
                query: query
            };
            return $http.post(url, opportunitiesListCallParams);
        }

        Opportunities.getDetail = function (user, id) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/detail_all';
            var opportunitiesListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Opportunities',
                link_to: 'accounts',
                id: id
            };
            return $http.post(url, opportunitiesListCallParams);
        }



        Opportunities.getRelatedList = function (user, id, linkName, fieldList, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/relate';
            var opportunitiesRelateCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Opportunities',
                linkName: linkName,
                fieldList: JSON.stringify(fieldList),
                maxResults: '20',
                id: id,
                query: query
            };
            return $http.post(url, opportunitiesRelateCallParams);
        }

        Opportunities.setDetail = function (user, opportunity) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/save';
            var accountsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Opportunities',
                fieldData: opportunity
            };
            return $http.post(url, accountsInlineEditParams);
        }

        Opportunities.inlineEdit = function (user, id, name, value) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/inline';
            var opportunitiesInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Opportunities',
                id: id,
                name: name,
                value: value
            };
            return $http.post(url, opportunitiesInlineEditParams);
        }

        return Opportunities;
    }])

//Calls Data Factory
app.factory('Calls', ['$http', 'Login', function ($http, Login) {
        var Calls = {};
        Calls.loginData = Login;
        Calls.list = '';
        Calls.fieldList = [
            'id',
            'name',
            'status',
            'date_start',
            'date_end',
            'direction',
            'duration_hours',
            'duration_minutes',
            'parent_type',
            'parent_id',
            'parent_name',
            'reminder_time',
            'email_reminder_time',
            'email_reminder_sent',
            'assigned_user_id'
        ];
        Calls.statuses = [
            {name: 'Planned', value: 'Planned'},
            {name: 'Held', value: 'Held'},
            {name: 'Not Held', value: 'Not Held'},
        ];
        Calls.directions = [
            {name: 'Inbound', value: 'Inbound'},
            {name: 'Outbound', value: 'Outbound'}
        ];
        Calls.parentTypes = [
            {name: 'Accounts', value: 'Accounts'},
            {name: 'Contacts', value: 'Contacts'},
            {name: 'Opportunities', value: 'Opportunities'},
            {name: 'Leads', value: 'Leads'},
        ];
        Calls.reminders = [
            {name: 'No Reminder', value: '-1'},
            {name: '1 Minute Prior', value: '60'},
            {name: '5 Minutes Prior', value: '300'},
            {name: '10 Minutes Prior', value: '600'},
            {name: '15 Minutes Prior', value: '900'},
            {name: '30 Minutes Prior', value: '1800'},
            {name: '1 Hour Prior', value: '3600'},
            {name: '2 Hours Prior', value: '7200'},
            {name: '3 Hours Prior', value: '10800'},
            {name: '5 Hours Prior', value: '18000'},
            {name: '1 Day Prior', value: '86400'},
        ];
        Calls.getList = function (user, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/list';
            var callsListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Calls',
                fieldList: JSON.stringify(Calls.fieldList),
                maxResults: '10000',
                query: query
            };
            return $http.post(url, callsListCallParams);
        }

        Calls.getDetail = function (user, id) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/detail';
            var callsListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Calls',
                id: id
            };
            return $http.post(url, callsListCallParams);
        }

        Calls.getRelatedList = function (user, id, linkName, fieldList, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/relate';
            var callsRelateCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Calls',
                linkName: linkName,
                fieldList: JSON.stringify(fieldList),
                maxResults: '20',
                id: id,
                query: query
            };
            return $http.post(url, callsRelateCallParams);
        }

        Calls.setDetail = function (user, call) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/save';
            var relation_parent_id = call.parent_id.value;
            var relation_parent_module = call.parent_type.value;
            var callsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Calls',
                moduleNameSmall :'calls',
                relation_parent_id : relation_parent_id,
                relation_parent_module : relation_parent_module,
                fieldData: call
            };
            return $http.post(url, callsInlineEditParams);
        }

        Calls.inlineEdit = function (user, id, name, value) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/inline';
            var callsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Calls',
                id: id,
                name: name,
                value: value
            };
            return $http.post(url, callsInlineEditParams);
        }

        return Calls;
    }])

//Meetings Data Factory
app.factory('Meetings', ['$http', 'Login', function ($http, Login) {
        var Meetings = {};
        Meetings.loginData = Login;
        Meetings.list = '';
        Meetings.fieldList = [
            'id',
            'name',
            'status',
            'date_start',
            'date_end',
            'duration_hours',
            'duration_minutes',
            'parent_type',
            'parent_id',
            'parent_name',
            'reminder_time',
            'email_reminder_time',
            'email_reminder_sent',
            'assigned_user_id'
        ];
        Meetings.statuses = [
            {name: 'Planned', value: 'Planned'},
            {name: 'Held', value: 'Held'},
            {name: 'Not Held', value: 'Not Held'},
            {name: 'Needs', value: 'Needs'},
        ];
        Meetings.directions = [
            {name: 'Inbound', value: 'Inbound'},
            {name: 'Outbound', value: 'Outbound'}
        ];
        Meetings.parentTypes = [
            {name: 'Accounts', value: 'Accounts'},
            {name: 'Contacts', value: 'Contacts'},
            {name: 'Opportunities', value: 'Opportunities'},
            {name: 'Leads', value: 'Leads'},
        ];
        Meetings.reminders = [
            {name: 'No Reminder', value: '-1'},
            {name: '1 Minute Prior', value: '60'},
            {name: '5 Minutes Prior', value: '300'},
            {name: '10 Minutes Prior', value: '600'},
            {name: '15 Minutes Prior', value: '900'},
            {name: '30 Minutes Prior', value: '1800'},
            {name: '1 Hour Prior', value: '3600'},
            {name: '2 Hours Prior', value: '7200'},
            {name: '3 Hours Prior', value: '10800'},
            {name: '5 Hours Prior', value: '18000'},
            {name: '1 Day Prior', value: '86400'},
        ];
        Meetings.getList = function (user, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/list';
            var meetingsListMeetingParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Meetings',
                fieldList: JSON.stringify(Meetings.fieldList),
                maxResults: '10000',
                query: query
            };
            return $http.post(url, meetingsListMeetingParams);
        }

        Meetings.getDetail = function (user, id) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/detail';
            var meetingsListMeetingParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Meetings',
                id: id
            };
            return $http.post(url, meetingsListMeetingParams);
        }

        Meetings.getRelatedList = function (user, id, linkName, fieldList, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/relate';
            var leadsRelateCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Meetings',
                linkName: linkName,
                fieldList: JSON.stringify(fieldList),
                maxResults: '20',
                id: id,
                query: query
            };
            return $http.post(url, leadsRelateCallParams);
        }

        Meetings.setDetail = function (user, meeting) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/save';
            var relation_parent_id = meeting.parent_id.value;
            var relation_parent_module = meeting.parent_type.value;
            var meetingsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Meetings',
                moduleNameSmall :'meetings',
                relation_parent_id : relation_parent_id,
                relation_parent_module : relation_parent_module,
                fieldData: meeting
            };
            return $http.post(url, meetingsInlineEditParams);
        }

        Meetings.inlineEdit = function (user, id, name, value) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/inline';
            var meetingsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Meetings',
                id: id,
                name: name,
                value: value
            };
            return $http.post(url, meetingsInlineEditParams);
        }

        return Meetings;
    }])

//Tasks Data Factory
app.factory('Tasks', ['$http', 'Login', function ($http, Login) {
        var Tasks = {};
        Tasks.loginData = Login;
        Tasks.list = '';
        Tasks.fieldList = [
            'id',
            'name',
            'status',
            'date_start',
            'date_due',
            'parent_type',
            'parent_id',
            'parent_name',
            'contact_id',
            'description',
            'assigned_user_id'
        ];
        Tasks.statuses = [
            {name: 'Not Started', value: 'Not Started'},
            {name: 'In Progress', value: 'In Progress'},
            {name: 'Completed', value: 'Completed'},
            {name: 'Pending Input', value: 'Pending Input'},
            {name: 'Deferred', value: 'Deferred'},
        ];
        Tasks.parentTypes = [
            {name: 'Accounts', value: 'Accounts'},
            {name: 'Contacts', value: 'Contacts'},
            {name: 'Opportunities', value: 'Opportunities'},
            {name: 'Leads', value: 'Leads'},
        ];
        Tasks.priorities = [
            {name: 'High', value: 'High'},
            {name: 'Medium', value: 'Medium'},
            {name: 'Low', value: 'Low'},
        ];
        Tasks.getList = function (user, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/list';
            var tasksListTaskParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Tasks',
                fieldList: JSON.stringify(Tasks.fieldList),
                maxResults: '10000',
                query: query
            };
            return $http.post(url, tasksListTaskParams);
        }

        Tasks.getDetail = function (user, id) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/detail';
            var tasksListTaskParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Tasks',
                id: id
            };
            return $http.post(url, tasksListTaskParams);
        }

        Tasks.getRelatedList = function (user, id, linkName, fieldList, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/relate';
            var tasksRelateCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Tasks',
                linkName: linkName,
                fieldList: JSON.stringify(fieldList),
                maxResults: '20',
                id: id,
                query: query
            };
            return $http.post(url, tasksRelateCallParams);
        }

        Tasks.setDetail = function (user, task) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/save';
            var tasksInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Tasks',
                fieldData: task
            };
            return $http.post(url, tasksInlineEditParams);
        }

        Tasks.inlineEdit = function (user, id, name, value) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/inline';
            var tasksInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Tasks',
                id: id,
                name: name,
                value: value
            };
            return $http.post(url, tasksInlineEditParams);
        }

        return Tasks;
    }])

//Leads Data Factory
app.factory('Leads', ['$http', 'Login', function ($http, Login) {
        var Leads = {};
        Leads.loginData = Login;
        Leads.list = '';
        Leads.fieldList = [
            'id',
            'name',
            'first_name',
            'last_name',
            'title',
            'email1',
            'phone_mobile',
            'account_id',
            'description',
            'assigned_user_id'
        ];

        Leads.statuses = [
            {name: 'New', value: 'New'},
            {name: 'Assigned', value: 'Assigned'},
            {name: 'In Process', value: 'In Process'},
            {name: 'Converted', value: 'Converted'},
            {name: 'Recycled', value: 'Recycled'},
            {name: 'Dead', value: 'Dead'},
        ];

        Leads.getList = function (user, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/list';
            var leadsListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Leads',
                fieldList: JSON.stringify(Leads.fieldList),
                maxResults: '10000',
                query: query
            };
            return $http.post(url, leadsListCallParams);
        }

        Leads.getDetail = function (user, id) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/detail';
            var leadsListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Leads',
                id: id
            };
            return $http.post(url, leadsListCallParams);
        }

        Leads.getRelatedList = function (user, id, linkName, fieldList, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/relate';
            var leadsRelateCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Leads',
                linkName: linkName,
                fieldList: JSON.stringify(fieldList),
                maxResults: '20',
                id: id,
                query: query
            };
            return $http.post(url, leadsRelateCallParams);
        }

        Leads.setDetail = function (user, lead) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/save';
            var leadsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Leads',
                fieldData: lead
            };
            return $http.post(url, leadsInlineEditParams);
        }

        Leads.inlineEdit = function (user, id, name, value) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/inline';
            var leadsInlineEditParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Leads',
                id: id,
                name: name,
                value: value
            };
            return $http.post(url, leadsInlineEditParams);
        }

        return Leads;
    }])

//Users Data Factory
app.factory('Users', ['$http', 'Login', function ($http, Login) {
        var Users = {};
        Users.loginData = Login;
        Users.list = '';
        Users.fieldList = [
            'id',
            'name',
            'first_name',
            'last_name',
            'title',
            'phone_mobile',
            'email1'
        ];
        Users.getList = function (user, query) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/list';
            var usersListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Users',
                fieldList: JSON.stringify(Users.fieldList),
                maxResults: '10000',
                query: query
            };
            return $http.post(url, usersListCallParams);
        }

        Users.getDetail = function (user, id) {
            var url = 'http://161.202.21.7/mobilecrm/api/rest/detail';
            var usersListCallParams = {
                url: user.loggedURL,
                username: user.loggedUserName,
                password: user.loggedUserPassword,
                moduleName: 'Users',
                fieldList: JSON.stringify(Users.fieldList),
                id: id
            };
            return $http.post(url, usersListCallParams);
        }

        return Users;
    }])

/*
 * MISC FACTORIES
 */
app.factory('Login', ['$http', '$state', function ($http, $state) {

        var urlBase = 'http://161.202.21.7/mobilecrm/api/rest/init';
        var Login = {};
        Login.do = function (user) {
            return $http.post(urlBase, user);
        };
        return Login;
    }])

app.factory('myHttpInterceptor', ['$q', '$window', function ($q, $window) {
        return function (promise) {
            return promise.then(function (response) {
                var btn = $("#loginUser, .save");
                btn.button('reset');
//                ngProgress.complete();
                return response;
            }, function (response) {
                var btn = $("#loginUser, .save");
                btn.button('reset');
                return $q.reject(response);
            });
        };
    }])

app.factory('Emails', ['$http', function ($http) {
        var Emails = {};
        Emails.send = function (email) {

            var url = 'http://161.202.21.7/mobilecrm/api/mail/send';
            var emailSendParams = {
                toID: email.toID,
                toName: email.toName,
                fromID: email.fromID,
                fromName: email.fromName,
                cc: email.cc,
                bcc: email.bcc,
                subject: email.subject,
                body: email.body
            };
            return $http.post(url, emailSendParams);
        }

        return Emails;
    }])

/*
 * DIRECTIVES
 */
//Directive for the back button based on the browser hstory mainited by angular.
app.directive('backButton', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', goBack);
            function goBack() {
                $('[id^=Modal]').modal('hide');
                $('*').removeClass('modal-open');
                $('.modal-backdrop').remove();
                history.back();
                scope.$apply();
            }
        }
    }
});


//Directive for giving warning message while clicking reset button.
app.directive('resetButton', [ '$state', function ($state) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', resetFields);
            function resetFields() {
                 //reset fields 
                $('[id^=Modal]').modal('hide');
                $('*').removeClass('modal-open');
                $('.modal-backdrop').remove();         
                scope.reset();
                //$state.transitionTo($state.current);
                scope.$apply();        
                   
            }
        }
    }
}]);


//Directive for giving warning message while clicking signOut button.
app.directive('signoutButton', [ '$state', 'Login', function ($state,Login) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', signoutUser);
            function signoutUser() {
                 //reset fields 
                $('[id^=Modal]').modal('hide');
                $('*').removeClass('modal-open');
                $('.modal-backdrop').remove();         
                //scope.reset();
                    Login.isLogged = 'no';
                    Login.loggedUserName = '';
                    Login.loggedUserPassword = '';
                    Login.loggedURL = '';
                    Login.loggedUserID = '';
                    Login.loggedSessionID = '';
                    $state.transitionTo('login');
                //$state.transitionTo($state.current);
                scope.$apply();        
                   
            }
        }
    }
}]);




//Directive to refresh the state page with state values.
app.directive('refresh', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doRefresh);
                function doRefresh() {
                    $('[id^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    element.addClass('fa-spin');
                    $state.transitionTo($state.current, $stateParams, {
                        reload: true,
                        inherit: false,
                        notify: true
                    });
                    scope.$apply();
                }
            }
        }
    }])

//Directive to kick off email compose view by passing TO emailID and TO name.
app.directive('emailCompose', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doCompose);
                function doCompose() {
                    var toID = attrs.emailCompose;
                    var toName = attrs.emailToName;
                    $state.transitionTo('home.emails.compose', {toID: toID, toName: toName});
                    scope.$apply();
                }
            }
        }
    }])

//Directive to kick off a sms compose view
app.directive('smsCompose', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doCompose);
                function doCompose() {
                    var toNum = attrs.smsCompose;
                    $('[id^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    $state.transitionTo('home.sms.compose', {toNum: toNum});
                    scope.$apply();
                }
            }
        }
    }])

//Directive to open URL's in the system web-browser.
app.directive('inAppBrowse', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', launchInApp);
            function launchInApp() {
                console.log(attrs.inAppBrowse);
                window.open(attrs.inAppBrowse, '_system', 'location=yes');
            }
        }
    }
});

//Directive to open URL's in the system web-browser.
app.directive('mapBrowse', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', launchInApp);
            function launchInApp() {
                console.log(attrs.mapBrowse);
                var url = "https://maps.google.com/?q=" + encodeURIComponent(attrs.mapBrowse);
                console.log(url);
                window.open(url, '_system', 'location=yes');
            }
        }
    }
});

//Directive for search toggle button.
app.directive('searchToggle', function () {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element, attrs) {
            element.bind('click', searchToggle);
            function searchToggle() {
                element.addClass('active');
                scope.searchShow = !scope.searchShow;
                if (!scope.$$phase && !scope.$root.$$phase) {
                    scope.$apply()
                }
            }
        }
    }
})

//Directive to beautify list dates for Call, Meetings, Tasks.
app.directive('listDateBeautify', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var dateString = attrs.listDateBeautify;
            var date = moment(dateString).format('Do MMM YYYY, hh:mm a');
            element.text(date);
            var now = moment().format('YYYY-MM-D HH:mm:ss');
            var check = moment(dateString).format('YYYY-MM-D hh:mm a');
            if (moment(check).unix() > moment(now).unix()) {
                element.addClass('text-success');
            } else if (moment(check).unix() < moment(now).unix()) {
                element.addClass('text-danger');
            } else if (moment(check).unix() === moment(now).unix()) {
                element.addClass('text-warning');
            }
        }
    }
});

//Directive to auto Format all phone numbers.
app.directive('formatNumber', [function () {
        return{
            restrict: 'A',
            scope: {
                phone: '=',
                status: '='
            },
            link: function (scope, element, attrs) {
                element.bind('keyup', format);
                function format() {
                    if (scope.phone.length < 13) {
                        scope.status = true;
                        if (scope.phone.length === 3) {
                            scope.phone = scope.phone + '-';
                        } else if (scope.phone.length === 7) {
                            scope.phone = scope.phone + '-';
                        } else if (scope.phone.length === 10) {
                            scope.phone = scope.phone + '-';
                            scope.status = true;
                        }
                    } else {
                        scope.status = false;
                    }
                    scope.$apply();
                }
            }
        }
    }])

/*
 * DETAIL VIEW DIRECTIVES
 */
//ACCOUNTS DETAIL
app.directive('accountDetail', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doDetail);
                function doDetail() {
                    var id = attrs.accountDetail;
                    $state.transitionTo('home.accounts.detail', {id: id});
                    scope.$apply();
                }
            }
        }
    }])

//CONTACTS DETAIL
app.directive('contactDetail', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doDetail);
                function doDetail() {
                    var id = attrs.contactDetail;
                    $state.transitionTo('home.contacts.detail', {id: id});
                    scope.$apply();
                }
            }
        }
    }])

//OPPORTUNITIES DETAIL
app.directive('opportunityDetail', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doDetail);
                function doDetail() {
                    var id = attrs.opportunityDetail;
                    $state.transitionTo('home.opportunities.detail', {id: id});
                    scope.$apply();
                }
            }
        }
    }])

//CALLS DETAIL
app.directive('callDetail', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doDetail);
                function doDetail() {
                    $('[id^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var id = attrs.callDetail;
                    $state.transitionTo('home.calls.detail', {id: id});
                    scope.$apply();
                }
            }
        }
    }])

//MEETINGS DETAIL
app.directive('meetingDetail', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doDetail);
                function doDetail() {
                    $('[id^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var id = attrs.meetingDetail;
                    $state.transitionTo('home.meetings.detail', {id: id});
                    scope.$apply();
                }
            }
        }
    }])

//TASKS DETAIL
app.directive('taskDetail', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doDetail);
                function doDetail() {
                    $('[id^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var id = attrs.taskDetail;
                    $state.transitionTo('home.tasks.detail', {id: id});
                    scope.$apply();
                }
            }
        }
    }])

//LEADS DETAIL
app.directive('leadDetail', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doDetail);
                function doDetail() {
                    var id = attrs.leadDetail;
                    $state.transitionTo('home.leads.detail', {id: id});
                    scope.$apply();
                }
            }
        }
    }])

/*
 * CREATE VIEW DIRECTIVES
 */
//ACCOUNTS CREATE
app.directive('accountCreate', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doCreate);
                function doCreate() {
                    $('[id^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var type = attrs.accountType;
                    $state.transitionTo('home.accounts.create', {type: type});
                    scope.$apply();
                }
            }
        }
    }])

//CONTACTS CREATE
app.directive('contactCreate', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doCreate);
                function doCreate() {
                    $('[id^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var type = attrs.contactType;
                    $state.transitionTo('home.contacts.create', {type: type});
                    scope.$apply();
                }
            }
        }
    }])

//CONTACTS CREATE
app.directive('opportunityCreate', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doCreate);
                function doCreate() {
                    $('[id^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var type = attrs.opportunityType;
                    $state.transitionTo('home.opportunities.create', {type: type});
                    scope.$apply();
                }
            }
        }
    }])

//CALLS CREATE
app.directive('callCreate', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doCreate);
                function doCreate() {
                    $('[parentid^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var parentid = attrs.callParentid;
                    var type = attrs.callType;
                    $state.transitionTo('home.calls.create', {type: type, parentid: parentid});
                    scope.$apply();
                }
            }
        }
    }])

//MEETINGS CREATE
app.directive('meetingCreate', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doCreate);
                function doCreate() {
                    $('[parentid^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var parentid = attrs.meetingParentid;
                    var type = attrs.meetingType;
                    $state.transitionTo('home.meetings.create', {type: type, parentid: parentid});
                    scope.$apply();
                }
            }
        }
    }])

//TASKS CREATE
app.directive('taskCreate', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doCreate);
                function doCreate() {
                    $('[parentid^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var parentid = attrs.taskParentid;
                    var type = attrs.taskType;
                    $state.transitionTo('home.tasks.create', {type: type, parentid: parentid});
                    scope.$apply();
                }
            }
        }
    }])

//LEADS CREATE
app.directive('leadCreate', ['$state', '$stateParams', function ($state, $stateParams) {
        return{
            retrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', doCreate);
                function doCreate() {
                    $('[id^=Modal]').modal('hide');
                    $('*').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    var type = attrs.leadType;
                    $state.transitionTo('home.leads.create', {type: type});
                    scope.$apply();
                }
            }
        }
    }])

/*
 * FILTERS
 */
//Filter to strip strings.
app.filter('strip', function () {
    return function (value, wordwise, max, tail) {
        if (!value)
            return '';
        max = parseInt(max, 10);
        if (!max)
            return value;
        if (value.length <= max)
            return value;
        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});

app.filter('condition', function () {
    return function (input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
    };
});
