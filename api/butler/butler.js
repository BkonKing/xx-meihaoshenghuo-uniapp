import request from '@/utils/request.js'

// 智慧管家应用列表接口
export function queryAllApp(data) {
  return request.get('/butler/index/allApp', data)
}
/* 云门禁 start */
// 二维码开门接口
export function getQrCode(data) {
  return request.post('/butler/entrance/getQrCode', data)
}

// 远程开门接口
export function ycOpenDoor(data) {
  return request.post('/butler/entrance/ycOpenDoor', data)
}

/* 云门禁 end */

/* 公告通知 start */

// 公告通知列表接口
export function getNoticeList(data) {
  return request.get('/butler/notice/getNoticeList', data)
}

// 标记为已读接口
export function setNoticeReaded(data) {
  return request.post('/butler/notice/setNoticeReaded', data)
}

// 公告通知详情接口
export function getNoticInfo(data) {
  return request.get('/butler/notice/getNoticInfo', data)
}

/* 公告通知 end */

/* 报事报修 start */

// 报事报修列表接口
export function getRepairList(data) {
  return request.get('/butler/repairs/getRepairList', data)
}

// 报事报修详情接口
export function getRepairInfo(data) {
  return request.get('/butler/repairs/getRepairInfo', data)
}

// 新增报事报修接口
export function addRepair(data) {
  return request.post('/butler/repairs/addRepair', data)
}

// 撤消提报接口
export function cancelRepair(data) {
  return request.post('/butler/repairs/cancelRepair', data)
}

/* 报事报修 end */

/* 免费服务 start */

// 免费服务列表接口
export function getFreeServerList(data) {
  return request.get('/butler/freeserver/getFreeServerList', data)
}
// 我的免费预约列表接口
export function getMyFreeServerList(data) {
  return request.get('/butler/freeserver/getMyFreeServerList', data)
}

/* 免费服务 end */

/* 呼叫物业列表 start */
export function getCallWYList(data) {
  return request.get('/butler/phone/getCallWYList', data)
}
/* 呼叫物业 end */

/* 便民黄页列表 start */
export function getYellowPagesList(data) {
  return request.get('/butler/phone/getYellowPagesList', data)
}
/* 呼叫物业 end */

/* 投诉表扬 start */

// 新增投诉表扬接口
export function addComPraise(data) {
  return request.post('/butler/compraise/addComPraise', data)
}

/* 呼叫物业 end */