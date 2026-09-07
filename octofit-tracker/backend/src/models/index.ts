import { model, Schema, type InferSchemaType } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    points: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    memberUsernames: { type: [String], default: [] },
  },
  { timestamps: true },
);

const activitySchema = new Schema(
  {
    username: { type: String, required: true },
    activityType: { type: String, required: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    points: { type: Number, required: true, min: 0 },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

const leaderboardSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    focus: { type: String, required: true },
    difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    durationMinutes: { type: Number, required: true, min: 1 },
    exercises: { type: [String], required: true },
  },
  { timestamps: true },
);

export type User = InferSchemaType<typeof userSchema>;
export type Team = InferSchemaType<typeof teamSchema>;
export type Activity = InferSchemaType<typeof activitySchema>;
export type LeaderboardEntry = InferSchemaType<typeof leaderboardSchema>;
export type Workout = InferSchemaType<typeof workoutSchema>;

export const UserModel = model<User>('User', userSchema);
export const TeamModel = model<Team>('Team', teamSchema);
export const ActivityModel = model<Activity>('Activity', activitySchema);
export const LeaderboardModel = model<LeaderboardEntry>('Leaderboard', leaderboardSchema);
export const WorkoutModel = model<Workout>('Workout', workoutSchema);