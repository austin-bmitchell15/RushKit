import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    
    const post = req.body;

    const parsedId = new mongoose.Types.ObjectId(_id);
    console.log(parsedId);

    if (mongoose.Types.ObjectId.isValid(parsedId)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate((parsedId), {...post, parsedId}, { new: true });
    
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    const parsedId = new mongoose.Types.ObjectId(_id);
    console.log(parsedId);

    if (mongoose.Types.ObjectId.isValid(parsedId)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndDelete(parsedId);
    
    res.json({message: 'Post Deleted successfully'});
}