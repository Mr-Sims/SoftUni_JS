import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    getAll: `/data/topics?load=${encodeURIComponent('author=_ownerId:users')}&select=_id,title,_ownerId`,
    getTopicCount: '/data/topics?count',
    getById: (id) => `/data/topics/${id}?load=${encodeURIComponent('author=_ownerId:users')}`,
    createTopic: '/data/topics',
    getCommentsById: (topicId) => '/data/topicComments?where=' + encodeURIComponent(`topicId="${topicId}"`) + `&sortBy=_createdOn%20desc&load=${encodeURIComponent('author=_ownerId:users')}`,
    createComment: '/data/topicComments',
}

export async function getAllTopics() {
    return api.get(endpoints.getAll)
}

export async function getTopicCount() {
    return api.get(endpoints.getTopicCount)
}

export async function getTopicById(id) {
    return api.get(endpoints.getById(id))
}

export async function createTopic(topic) {
    return api.post(endpoints.createTopic, topic)
}

export async function getCommentsByTopicId(topicId) {
    return api.get(endpoints.getCommentsById(topicId))
}

export async function createComment(comment) {
    return api.post(endpoints.createComment, comment)
}