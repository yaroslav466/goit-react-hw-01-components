import { Profile } from './profile/user_profile';
import userInfo from '../data/user.json';

import { Statistics } from './stats/user_stats';
import stats from '../data/data.json';

import { FriendList } from './friends/user_friends';
import friends from '../data/friends.json';

import { TransactionHistory } from './transactionhistory/user_transactions';
import transactionArr from '../data/transactions.json';

export const App = () => {
  return (
    <main>
   <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Statistics title="Upload stats" stats={stats} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactionArr} />
</main>
  );

};
