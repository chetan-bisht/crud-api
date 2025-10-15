import { getAllUsers as getAllUsersModel, createUser as createUserModel, getUserById as getUserByIdModel, updateUser as updateUserModel, deleteUser as deleteUserModel } from '../models/userModel.js';
//Standardize error handling
const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data
    });
};

export const getAllUsers = async(req, res, next) => {
    console.log('getAllUsers called, req.body:', req.body); // Diagnostic log
    try {
        const users = await getAllUsersModel();
        handleResponse(res, 200, "Users fetched successfully", users);
    }
    catch (error) {
        next(error);
    }
};

export const getUserById = async(req, res, next) => {
    try {
        const user = await getUserByIdModel(req.params.id);
        if(!user) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User fetched successfully", user);
    }
    catch (error) {
        next(error);
    }
};

export const createUser = async(req, res, next) => {
    console.log('createUser called, req.body:', req.body); // Diagnostic log
    const { name, email } = req.body;
    try {
        const newUser = await createUserModel(name,email);
        handleResponse(res, 201, "User created successfully", newUser);
    }
    catch (error) {
        next(error);
    }
};

export const updateUser = async(req, res, next) => {
    console.log('updateUser called, req.body:', req.body); // Diagnostic log
    try {
        const updatedUser = await updateUserModel(req.body.name, req.body.email, req.params.id);
        if(!updatedUser) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User updated successfully", updatedUser);
    }
    catch (error) {
        next(error);
    }
};

export const deleteUser = async(req, res, next) => {
    try {
        const deletedUser = await deleteUserModel(req.params.id);
        if(!deletedUser) return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User deleted successfully", deletedUser);
    }
    catch (error) {
        next(error);
    }
};
