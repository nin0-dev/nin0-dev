if(~req.body.dbUser.permissions & Permission.SET_ALL_PERMISSIONS) {
                let canContinue = 1;
                if(~req.body.dbUser.permissions & Permission.START_STOP_TIME_TRACK && req.body.permissions & Permission.START_STOP_TIME_TRACK)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.SELF_APPROVE_TIMESHEET && req.body.permissions & Permission.SELF_APPROVE_TIMESHEET)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.APPROVE_OTHER_TIMESHEETS && req.body.permissions & Permission.APPROVE_OTHER_TIMESHEETS)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.SEND_NOTIFICATIONS && req.body.permissions & Permission.SEND_NOTIFICATIONS)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.VIEW_OWN_HISTORY && req.body.permissions & Permission.VIEW_OWN_HISTORY)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.VIEW_OTHERS_HISTORY && req.body.permissions & Permission.VIEW_OTHERS_HISTORY)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.EDIT_OWN_INFO && req.body.permissions & Permission.EDIT_OWN_INFO)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.EDIT_OWN_PASSWORD && req.body.permissions & Permission.EDIT_OWN_PASSWORD)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.EDIT_OTHERS_INFO && req.body.permissions & Permission.EDIT_OTHERS_INFO)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.RESET_PASSWORDS && req.body.permissions & Permission.RESET_PASSWORDS)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.ADD_USERS && req.body.permissions & Permission.ADD_USERS)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.EDIT_TIMESHEETS && req.body.permissions & Permission.EDIT_TIMESHEETS)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.REMOVE_USERS && req.body.permissions & Permission.REMOVE_USERS)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.SET_ALL_PERMISSIONS && req.body.permissions & Permission.SET_ALL_PERMISSIONS)
                    canContinue = 0;
                if(~req.body.dbUser.permissions & Permission.IMPERSONATE && req.body.permissions & Permission.IMPERSONATE)
                    canContinue = 0;
                if(!canContinue) return res.status(400).send({});
            }
