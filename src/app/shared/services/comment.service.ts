import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Comment} from  '../models/comment.model'
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  getComment(): Comment[] {
    return [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@gmail.com',
        message: 'Some comment message.',
        Notation : 4,
        replies: [
          {
            id: '101',
            name: 'Alice',
            email: 'alice@gmail.com',
            message: 'Reply 1.',
            parentComment :'1',
            Notation : 0,
            replies: [],
          },
          {
            id: '102',
            name: 'Bob',
            email: 'bob@gmail.com',
            message: 'Reply 2.',
            Notation : 0,
            parentComment :'1',
            replies: [],
          },
          {
            id: '103',
            name: 'Boob',
            email: 'booob@gmail.com',
            message: 'Reply 3.',
            Notation : 0,
            parentComment :'1',
            replies: [],
          },
          // ... other replies
        ],
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@gmail.com',
        message: 'Another comment message.',
        Notation : 3,

        replies: [
          {
            id: '201',
            name: 'Charlie',
            email: 'charlie@gmail.com',
            message: 'Reply A.',
                        Notation : 0,
    

            replies: [],
          },
          {
            id: '202',
            name: 'David',
            email: 'david@gmail.com',
            message: 'Reply B.',
            replies :[],
            Notation : 0,


          },
          // ... other replies
        ],
      },
      {
        id: '3',
        name: 'Janeeee Smith',
        email: 'jane@gmail.com',
        message: 'Another comment message.',
        Notation : 0,

        replies: [
          {
            id: '203',
            name: 'Charlie',
            email: 'charlie@gmail.com',
            message: 'Reply A.',
            replies: [],
            Notation : 0,
          },
          {
            id: '204',
            name: 'David',
            email: 'david@gmail.com',
            message: 'Reply B.',
            Notation : 0,
            replies :[]

          },
          // ... other replies
        ],
      },
      // ... other comments
    ];
  }
}
