import request from '@/utils/request.js'

// 智慧管家应用列表接口
export function queryAllApp(data) {
  return request.get('/butler/index/allApp', data)
}

// 公告通知列表接口
export function getNoticeList(data) {
  return request.get('/butler/notice/getNoticeList', data)
}

// 标记为已读接口
export function setNoticeReaded(data) {
  return request.post('/butler/notice/setNoticeReaded', data)
}

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