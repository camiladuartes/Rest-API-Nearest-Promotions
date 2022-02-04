import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {
    ApiOperation,
    ApiResponse,
} from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity'

// Receives HTTP request; localhost:3000/comments
// Maps resource endpoints to a serive method
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post()
    @ApiOperation({summary: 'Creates a new comment'})
    @ApiResponse({ 
        status: 201, 
        description: 'Creates a comment.'
    })
    async create(@Body() createCommentDto: CreateCommentDto) {
        return this.commentsService.create(createCommentDto);
    }

    @Get()
    @ApiOperation({ summary: 'Finds all comments' })
    @ApiResponse({
        status: 200,
        description: 'Returns a list of comments',
        type: Comment,
    })
    findAll() {
        return this.commentsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find a comment by id' })
    @ApiResponse({
        status: 200,
        description: 'Returns a comment with the specified id',
        type: Comment,
    })
    findOne(@Param('id') id: string) {
        return this.commentsService.findOne(id);
    }

    @Patch()
    @ApiOperation({ summary: 'Updates a comment by id' })
    @ApiResponse({
        status: 200,
        description: 'Updates a comment',
        type: Comment,
    })
    update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
        return this.commentsService.update(id, updateCommentDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletes a comment' })
    @ApiResponse({
        status: 200,
        description: 'Deletes the comment with the specified id',
        type: Comment,
    })
    remove(@Param('id') id: string) {
        return this.commentsService.remove(id);
    }
}
