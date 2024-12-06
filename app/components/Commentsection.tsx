import React, {useState} from 'react';
import {Card, CardContent} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from '../components/ui/button';

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId : string;
}

export default function CommentSectionProps({postId}: CommentSectionProps) {
  const [comments , setcomments] = useState<Comment[]>([]);
  const [newComment , setNewComment] = useState('');
  const [authorname , setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null> (null);

  const handleAddComment = () => {
    if(newComment.trim() && authorname.trim()) {
      const newCommentObj : Comment = {
        id: new Date().toISOString(),
        author: authorname,
        text: newComment,
      };
      setcomments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditCommit = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.text);
      setEditingCommentId(commentID);
    }
    };


const handleSaveEditComment = () => {
  if(newComment.trim() && authorname.trim() && editingCommentId){
    const updateComments = comments.map((comments) =>
    comments.id === editingCommentId
    ? {...comments , text: newComment, author: authorname}
    : comments
  );
  setcomments(updateComments);
  setNewComment('');
  setAuthorName('');
  setEditingCommentId(null);
  }
}


return(
  <div className='mt-8'>
    <h2 className='text-2xl font-semibold'> Comments</h2>

    <div className='mt-4 space-y-4'>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className='p-4'>
              <div className='font-semibold'> {comment.author} </div>
              <p>{comment.text}</p>
              <Button
              onClick={() => handleEditCommit(comment.id)}
              className='mt-2 text-blue-500'>
              Edit
              </Button>
            </CardContent>
          </Card>
        ))
      ): (
        <p className='text-slate-400'> No comment yet </p>
      )}
    </div>


    <div className='mt-6'>

      <Input
      type='text'
      value={authorname}
      onChange={(e) => setAuthorName(e.target.value)}
      placeholder='your Name'
      className='w-full mb-2' 
      />

<Input
      type='text'
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder='Add a comment'
      className='w-full mb-2' 
      />
      <Button
      onClick={editingCommentId ? handleSaveEditComment : handleAddComment}
      className='mt-4'>
        {editingCommentId ? 'Save' : 'Submit'}
        
      </Button>
    </div>
  </div>
)
}