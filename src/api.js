// const token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
const API_USER_URL = 'https://wedev-api.sky.pro/api/user'
const API_URL = 'https://wedev-api.sky.pro/api/kanban'

export async function login({ login, password }) {
    const response = await fetch(API_USER_URL + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    })

    if (response.status === 400) {
        throw new Error('Неверный логин или пароль')
    }
    const data = await response.json()
    return data
}

export async function getTasks({ token }) {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    if (!response.ok) {
        throw new Error('Ошибка сервера')
    }

    const data = await response.json()
    return data
}

export async function signUp({ name, login, password }) {
    const response = await fetch(API_USER_URL, {
        method: 'POST',
        body: JSON.stringify({
            name,
            login,
            password,
        }),
    })

    if (response.status === 400) {
        throw new Error('Пользователь с таким логином уже существует')
    }

    const data = await response.json()
    console.log(data)
    return data
}

export async function addTask({
    token,
    title,
    topic,
    status,
    description,
    date,
}) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title,
            topic,
            status,
            description,
            date,
        }),
    })

    if (response.status === 400) {
        throw new Error('Пожалуйста, заполните все поля')
    }

    const data = response.json()
    return data
}

export async function deleteTask({ token, id }) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = response.json()
    return data
}

export async function updateTask({
    token,
    id,
    title,
    topic,
    status,
    description,
    date,
}) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title,
            topic,
            status,
            description,
            date,
        }),
    })
    const data = response.json()
    return data
}
