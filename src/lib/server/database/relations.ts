import { relations } from "drizzle-orm/relations";
import { themes, levels, userLevels, users, themesUsers } from "./schema";

export const levelsRelations = relations(levels, ({one, many}) => ({
	theme: one(themes, {
		fields: [levels.themesId],
		references: [themes.id]
	}),
	userLevels: many(userLevels),
}));

export const themesRelations = relations(themes, ({many}) => ({
	levels: many(levels),
	themesUsers: many(themesUsers),
}));

export const userLevelsRelations = relations(userLevels, ({one}) => ({
	level: one(levels, {
		fields: [userLevels.levelsId],
		references: [levels.id]
	}),
	user: one(users, {
		fields: [userLevels.usersId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	userLevels: many(userLevels),
	themesUsers: many(themesUsers),
}));

export const themesUsersRelations = relations(themesUsers, ({one}) => ({
	theme: one(themes, {
		fields: [themesUsers.themesId],
		references: [themes.id]
	}),
	user: one(users, {
		fields: [themesUsers.usersId],
		references: [users.id]
	}),
}));