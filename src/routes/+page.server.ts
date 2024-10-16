import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async () => {
        redirect(302, '/landing-page')
    }
}

import { db } from '$lib/server/database/connection';
import { users } from '$lib/server/database/data';

export async function load() {
    const usuarios = await db.select().from(users);
    console.log(usuarios)
    return { usuarios };
}