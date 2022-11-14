import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";


function Tweet(props) {
   const userName = props.tweet.user.name
   const userHandle = props.tweet.user.handle
   const userTimeStamp = props.tweet.timestamp
   const userMsg = props.tweet.message
   const userImg = props.tweet.user.image


  return (
    <div className="tweet">
    <ProfileImage image={userImg} />

      <div className="body">
        <div className="top">
        <User user = {userName} handle = {userHandle}/>

        <Timestamp time={userTimeStamp} />
        </div>

        <Message message={userMsg} />   
        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
