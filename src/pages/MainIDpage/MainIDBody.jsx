// import "./_MainIDBody.scss"
// import { useState, useEffect} from "react";
// import {dateCoverstion} from "../../utilityfunctions"
// import { useFetcher, useParams } from "react-router-dom";

// //Components
// import VideoComp from "../../components/video_section/VideoComp";
// import VideoTitleComp from "../../components/video_section/videoinfo_section/videotitle/VideoTitleComp";
// import VideoStatsComp from "../../components/video_section/videoinfo_section/videostats/VideoStatsComp";
// import VideoDescription from "../../components/video_section/videoinfo_section/videodescription_section/VideoDesComp";
// import CommentComp from "../../components/video_section/videocomments_section/commentsection/CommentComp";
// import NextVideoSection from "../../components/nextvideo_section/NextVideoSectionComp";
// import CommentCard from "../../components/video_section/videocomments_section/commentcard/CommentCardComp"



// export default function PageBody({Maindata, Sidedata}) {

//   const {pageid}= useParams()
//   console.log(pageid + "0000000000") 


//   // let intialfounddata = Maindata.find((object) => object.id === pageid);
//   console.log(intialfounddata)

//   const selectedcommentsdata = intialfounddata.comments;
//   console.log(selectedcommentsdata);

//   const [commentpayload, setCommentPayload] = useState(selectedcommentsdata);
//   console.log(commentpayload);


//   const intialcommentrender = selectedcommentsdata.map((iteration) => (
//     <CommentCard
//       message={iteration.comment}
//       name={iteration.name}
//       time={dateCoverstion(iteration.timestamp)}
//       likes={iteration.likes}
//       key={iteration.id}
//     />
//   ));

//   const [commentrender, setCommentRender] = useState(intialcommentrender);

//   useEffect(()=>{
//     console.log("mounting")
//     const anothercommentrender = selectedcommentsdata.map((iteration) => (
//       <CommentCard
//         message={iteration.comment}
//         name={iteration.name}
//         time={dateCoverstion(iteration.timestamp)}
//         likes={iteration.likes}
//         key={iteration.id}
//       />
//     ));

//   setCommentRender(anothercommentrender)


// },[pageid])

//   //we need to figure out a way to update the comment payload



//   return(
//     <main> placeholder
//             <VideoComp
//           videodata={intialfounddata.video}
//           imagedata={intialfounddata.image}
//           />
//       <section className="dtwarpperbackground">
//         <section className="dtwrapper0">
//           <section className="dtwrapper1">

//             <VideoTitleComp titledata={intialfounddata.title} />
//             <VideoStatsComp
//               channeldata={intialfounddata.channel}
//               timestampdata={dateCoverstion(intialfounddata.timestamp)}
//               likesdata={intialfounddata.likes}
//               viewsdata={intialfounddata.views}
//             />
//             <VideoDescription
//               descriptiondata={intialfounddata.description}
//             />
//             <CommentComp
//               mappedelements={commentrender}
//               commentdata={commentpayload}
//               // updatecommentpayload={updatingCommentPayloadduetoFormInput}
//             />
//           </section>

//           <NextVideoSection
//             data1={Maindata}
//             data2={Sidedata}
//           />
//         </section>
//       </section>
//     </main>
//   );
// }