import mongoose from 'mongoose';
import {
  ActivityModel,
  LeaderboardModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      UserModel.deleteMany({}),
      TeamModel.deleteMany({}),
      ActivityModel.deleteMany({}),
      LeaderboardModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    await UserModel.insertMany([
      { username: 'alex', email: 'alex@octofit.test', displayName: 'Alex Morgan', points: 420 },
      { username: 'jordan', email: 'jordan@octofit.test', displayName: 'Jordan Lee', points: 360 },
      { username: 'sam', email: 'sam@octofit.test', displayName: 'Sam Rivera', points: 295 },
    ]);

    await TeamModel.insertMany([
      { name: 'Summit Striders', description: 'Consistent progress, one activity at a time.', memberUsernames: ['alex', 'jordan'] },
      { name: 'Morning Momentum', description: 'Early sessions and steady energy.', memberUsernames: ['sam'] },
    ]);

    await ActivityModel.insertMany([
      { username: 'alex', activityType: 'Run', durationMinutes: 35, points: 120, completedAt: new Date('2026-09-05') },
      { username: 'jordan', activityType: 'Cycling', durationMinutes: 45, points: 105, completedAt: new Date('2026-09-04') },
      { username: 'sam', activityType: 'Strength training', durationMinutes: 30, points: 90, completedAt: new Date('2026-09-03') },
    ]);

    await LeaderboardModel.insertMany([
      { username: 'alex', points: 420, rank: 1 },
      { username: 'jordan', points: 360, rank: 2 },
      { username: 'sam', points: 295, rank: 3 },
    ]);

    await WorkoutModel.insertMany([
      {
        title: 'Full-body foundation',
        focus: 'Strength',
        difficulty: 'beginner',
        durationMinutes: 25,
        exercises: ['Squats', 'Push-ups', 'Glute bridges', 'Plank'],
      },
      {
        title: 'Cardio intervals',
        focus: 'Endurance',
        difficulty: 'intermediate',
        durationMinutes: 30,
        exercises: ['Warm-up walk', 'Fast intervals', 'Recovery jog', 'Cool-down'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
