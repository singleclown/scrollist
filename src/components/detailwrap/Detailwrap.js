require('./Detailwrap.styl');
import React from 'react';
import AngleRight from 'salt-icon/lib/AngleRight';
import { Boxs, Context, Group, TextField, Field, Popup, Button } from 'saltui'
import { Control } from 'react-keeper'
const { HBox, Box, VBox } = Boxs;
const RollUp = require('components/rollup');
const Person = require('images/svg/person.svg')
const Tag = require('images/svg/tag.svg')
const classNames = require("classnames");
import { monStorage, Storage } from 'clientConfig/util/StoreData';

const handleClick = (item) => {
    let { warnId, studentId, teacherId, schoolId, warnTypeId, warnGrade, warnLevel, warnDate } = item;
    Control.go('/home/personalwarnlinfo', { data: { warnId, studentId, teacherId, schoolId, warnTypeId, warnGrade, warnLevel, warnDate } })
}
const showPopupContent = (listData) => {
    const component = (<div>
        {listData.length > 0 ? listData.map((item, index) => {
            return (
                <RollUp
                    data={item}
                    key={`roll${index}`}
                    nocheckround
                />);
        }) : <div className="t-FAC t-SMT100">
                暂无节点数据
        <Button type="secondary" className="t-FAC t-MT30" onClick={() => {
                    Popup.hide();
                }}
                >
                    返回
        </Button>
            </div>}
    </div>
    );
    return component
}

const handleClickShowMember = (fetchNoticeMember,listData) => {
    if(fetchNoticeMember){
        const cb = (listData=[])=>{
            Popup.show(showPopupContent(listData), {
                animationType: 'slide-left',
            });
        }
        fetchNoticeMember(cb);  
    } 
}
const Detailwrap = {
    Head: (props) => {
        return (
            <div className="detailwrap head">
                <div className="tag-box">
                    <Tag className="tag" />
                    <div className="tag-box-content">{props.noticeType}</div>
                </div>
                <HBox>
                    <Box className="vacant-position">
                        <p className="vacant-position-top"></p>
                        <p className=" vacant-position-bottom"></p>
                    </Box>
                    <Box className=" t-PR10 head-theme" flex={1}>
                        <HBox vAlign="center" >
                            <Box flex={1}></Box>
                            <Box className="t-MR8">
                                <Person width="12" height="12" fill='#7cc2f5' />
                            </Box>
                            <Box className="t-PT5">{props.sender}</Box>
                        </HBox>
                        <HBox className="t-MT4 t-MB10">
                            <Box flex={1}></Box>
                            <Box>{props.senderData}</Box>      
                        </HBox>
                    </Box>
                    <Box className="vacant-position">
                        <p className="vacant-position-top"></p>
                        <p className="vacant-position-bottom"></p>
                    </Box>
                </HBox>
            </div>
        );
    },
    Item: (props) => {
        return (
            <div className="detailwrap item">
                <Group className="t-PL10  t-PR10 item-content">
                    <Group.Head className="t-LH40 fs14 item-content-title"> {props.title}</Group.Head>
                    <Group.List>
                        <div className="item-content-noticecontent">
                            {props.noticeMsg}
                        </div>
                    </Group.List>
                </Group>
            </div>
        )
    },
    ItemDeliver: (props) => {
        return (
            <Group className="detailwrap item-list">
                <div onClick={() => { handleClickShowMember(props.fetchNoticeMember,props.listData) }}>
                    <Group.List >
                        <Field className="fs14" label="" icon={<AngleRight width="20" height="20" fill="#ccc" />} tappable={true}>
                            <div >查看发布对象<span className="t-ML5">已读(<span className="color">{props.readedUserCount}</span>/{props.sentUserCount}人)</span></div>
                        </Field>
                    </Group.List>
                </div>
            </Group>

        )
    }

}
module.exports = Detailwrap;
