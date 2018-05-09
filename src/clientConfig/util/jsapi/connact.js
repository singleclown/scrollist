module.exports = class connact {
    static siglechoose(pram, cb, devtype = undefined) {
        if (!devtype) {
            dd.biz.customContact.choose({
                title: pram.title,
                users: pram.users,
                corpId: pram.corpId,
                isShowCompanyName: pram.judge,
                disabledUsers: pram.disabledUsers,
                onSuccess: function (data) {
                    cb && cb(true, data);
                },
                onFail: function (err) { cb && cb(false, err); }
            });
        } else {
            DingTalkPC.biz.customContact.choose({
                title: pram.title,
                users: pram.users,
                corpId: pram.corpId,
                isShowCompanyName: pram.judge,
                disabledUsers: pram.disabledUsers,
                onSuccess: function (data) {
                    cb && cb(true, data);
                },
                onFail: function (err) { cb && cb(false, err); }
            });
        }

    }
    static  multiplechoose(pram, cb, devtype = undefined) {
        if (!devtype) {
            dd.biz.customContact.multipleChoose({
                             title:  pram.title, //标题
                             users:  pram.users,//一组员工userid
                             corpId:  pram.corpId,//加密的企业 ID，
                             isShowCompanyName:  pram.judge,   //true|false，默认为 false
                             selectedUsers:  pram.selectedUsers,
                             disabledUsers:  pram.disabledUsers, //不能选的人
                             max:  pram.max,//人数限制
                             onSuccess:  function (data)  {
                                     cb && cb(true, data);
                             },
                             onFail :  function (err)  { cb && cb(false, err); }
                     });
        } else {
            DingTalkPC.biz.customContact.multipleChoose({
                             title:  pram.title, //标题
                             users:  pram.users,//一组员工userid
                             corpId:  pram.corpId,//加密的企业 ID，
                             isShowCompanyName:  pram.judge,   //true|false，默认为 false
                             selectedUsers:  pram.selectedUsers,
                             disabledUsers:  pram.disabledUsers, //不能选的人
                             max:  pram.max,//人数限制
                             onSuccess:  function (data)  {
                                     cb && cb(true, data);
                             },
                             onFail :  function (err)  { cb && cb(false, err); }
                     });
        }

         }
    static  externalComplexPicker(pram, cb, devtype = undefined) {
        if (!devtype) {
             dd.biz.contact.externalComplexPicker({
                             title: pram.title,
                             corpId: pram.corpId,
                             multiple: pram.multiple, //是否多选  true多选，false单选，默认是单选
                             limitTips: pram.limitTips,
                             maxUsers: pram.maxUsers, //默认不限制
                             pickedUsers: pram.pickedUsers,  //已选，但可取消，只针对多选生效
                             disabledUsers: pram.disabledUsers, //不可选，，只针对多选生效
                             requiredUsers: pram.requiredUsers, //必选，只针对多选生效
                             onSuccess:  function (data)  {
                                       cb && cb(true, data);
                             },
                             onFail :  function (err)  { cb && cb(false, err); }
                     });
        } else {
            DingTalkPC.biz.contact.externalComplexPicker({
                             title: pram.title,
                             corpId: pram.corpId,
                             multiple: pram.multiple, //是否多选  true多选，false单选，默认是单选
                             limitTips: pram.limitTips,
                             maxUsers: pram.maxUsers, //默认不限制
                             pickedUsers: pram.pickedUsers,  //已选，但可取消，只针对多选生效
                             disabledUsers: pram.disabledUsers, //不可选，，只针对多选生效
                             requiredUsers: pram.requiredUsers, //必选，只针对多选生效
                             onSuccess:  function (data)  {
                                       cb && cb(true, data);
                             },
                             onFail :  function (err)  { cb && cb(false, err); }
                     });
        }

         }
         static  externalEditForm(pram, cb) {
                 dd.biz.contact.externalEditForm({
                         title: pram.title,
                         corpId: pram.corpId,
                         emplId: pram.emplId,//需要编辑的员工id，不填，则为新增外部联系人
                         name: pram.name,//需要新增的外部联系人的名字
                         mobile: pram.mobile,//需要预填的手机号
                         companyName: pram.companyName,//需要预填的公司名
                         deptName: pram.deptName,//预填部门名字
                         job: pram.job,//预填职位
                         remark: pram.remark,//备注信息
                         onSuccess:  function (data)  {
                                  cb && cb(true, data);
                         },
                         onFail :  function (err)  { cb && cb(false, err); }
                 });
         }
    static  getexternaluser(cb, devtype = undefined) {
        if (!devtype) {
            dd.biz.user.get({
                onSuccess:  function  (info)  {
                                 cb && cb(true, info);
                         },
                         onFail:  function  (err)  {
                                 cb && cb(false, err);
                         }
            });
        } else {
            DingTalkPC.biz.user.get({
                onSuccess:  function  (info)  {
                                 cb && cb(true, info);
                         },
                         onFail:  function  (err)  {
                                 cb && cb(false, err);
                         }
            });
        }

         }
        static  choosecontact(pram, cb, devtype = undefined) {
        if (!devtype) {

            dd.biz.contact.choose({
                startWithDepartmentId:  pram.startWithDepartmentId, //-1表示打开的通讯录从自己所在部门开始展示, 0表示从企业最上层开始，(其他数字表示从该部门开始:暂时不支持)
                multiple:  pram.multiple, //是否多选： true多选 false单选； 默认true
                users:  pram.users, //默认选中的用户列表，userid；成功回调中应包含该信息
                disabledUsers: pram.disabledUsers,// 不能选中的用户列表，员工userid
                corpId:  pram.corpId, //企业id
                max:  pram.max, //人数限制，当multiple为true才生效，可选范围1-1500
                limitTips: pram.limitTips, //超过人数限制的提示语可以用这个字段自定义
                isNeedSearch: pram.isNeedSearch, // 是否需要搜索功能
                title :  pram.title, // 如果你需要修改选人页面的title，可以在这里赋值 
                local: pram.local, // 是否显示本地联系人，默认false
                onSuccess:  function (data)  {

                    cb && cb(true, data);
                },
                onFail :  function (err)  {
                    cb && cb(false, err);
                }
            });
        } else {
            DingTalkPC.biz.contact.choose({
                multiple: pram.multiple, //true, //是否多选： true多选 false单选； 默认true
                users: pram.users,//['10001', '10002', ...], //默认选中的用户列表，员工userid；成功回调中应包含该信息
                corpId: pram.corpId,//'dingb4ff1079f84f8d54', //企业id
                max: pram.max, //人数限制，当multiple为true才生效，可选范围1-1500
                onSuccess: function (data) {
                    cb && cb(true, data);
                },
                onFail: function (err) { cb && cb(false, err); }
            });
        }

    }
        static  complexPicker(pram, cb) {
                 dd.biz.contact.complexPicker({
            title: pram.title,            //标题
            corpId: pram.corpId,              //企业的corpId
            multiple: pram.multiple,            //是否多选
            limitTips: pram.limitTips,          //超过限定人数返回提示
            maxUsers: pram.maxUsers,            //最大可选人数
            pickedUsers: pram.pickedUsers,            //已选用户
            pickedDepartments: pram.pickedDepartments,          //已选部门
            disabledUsers: pram.disabledUsers,            //不可选用户
            disabledDepartments: pram.disabledDepartments,        //不可选部门
            requiredUsers: pram.requiredUsers,            //必选用户（不可取消选中状态）
            requiredDepartments: pram.requiredDepartments,        //必选部门（不可取消选中状态）
            appId: pram.appId,              //微应用的Id
            permissionType: pram.permissionType,          //选人权限，目前只有GLOBAL这个参数
            responseUserOnly: pram.responseUserOnly,        //单纯返回人，或者返回人和部门
            onSuccess:  function (result)  {
                cb && cb(true, result);
            },
            onFail :  function (err)  { cb && cb(false, err); }
        });
         }
    static  departmentsPicker(pram, cb) {
                 dd.biz.contact.departmentsPicker({
            title: pram.title,            //标题
            corpId: pram.corpId,              //企业的corpId
            multiple: pram.multiple,            //是否多选
            limitTips: pram.limitTips,          //超过限定人数返回提示
            maxDepartments: pram.maxDepartments,            //最大选择部门数量
            pickedDepartments: pram.pickedDepartments,          //已选部门
            disabledDepartments: pram.disabledDepartments,        //不可选部门
            requiredDepartments: pram.requiredDepartments,        //必选部门（不可取消选中状态）
            appId: pram.appId,              //微应用的Id
            permissionType: pram.permissionType,          //选人权限，目前只有GLOBAL这个参数
            onSuccess:  function (result)  {
                cb && cb(true, result);
            },
            onFail :  function (err)  { cb && cb(false, err); }
        });
        }
    static  createGroup(pram, cb) {
                 dd.biz.contact.createGroup({
            corpId: pram.corpId, //企业id，可选，配置该参数即在指定企业创建群聊天
            users: pram.users, //默认选中的用户工号列表，可选；使用此参数必须指定corpId
            onSuccess:  function (result)  {
                cb && cb(true, result);
            },
            onFail:  function (err)  {
                cb && cb(false, err);
            }
        });
        }
        static  setRulecontact(pram, cb) {
                 dd.biz.contact.setRule({
            title:  pram.title,//标题
            multiple:  pram.multiple, //是否多选： true多选 false单选； 默认true
            selectRuledUsers:  pram.selectRuledUsers, // 是否需要去取默认的uid list
            corpId:  pram.corpId, //企业id，corpid必须是用户所属的企业的corpid
            maxUsers:  pram.maxUsers, //人数限制，当multiple为true才生效，可选范围1-1500
            limitTips: pram.limitTips, //超出选人的人数限制之后的提示
            appId: pram.appId, //企业appid ， 非必填
            permissionType: pram.permissionType,//权限类型，非必填
            agentId: pram.agentId,
            ruleId: pram.ruleId,// 规则id
            ruleName: pram.ruleName, //规则名称
            onSuccess:  function (data)  {
                cb && cb(true, data);
            },
            onFail :  function (err)  { cb && cb(false, err) }
        });
        }
}