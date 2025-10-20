"use client"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoAlertCircleOutline } from "react-icons/io5";

function CreateAssignment() {
  const schema = yup.object().shape({
      assignmentTitle: yup
          .string()
          .required("Please enter your email"),
      description: yup
          .string()
          .required("Password is required")
          .min(10, "Description must be at least 10 characters long"),
      submissionDeadline: yup
          .date()
          .required("Please select a valid date"),
      totalMarks: yup
          .number()
          .required("Total Marks is required")
          .min(1, "Total Marks can't be 0"),
      maxFileSize: yup
          .number()
          .required("Please input Max File Size")
          .min(1, "File size can't be 0MB"),
      allowedFileTypes: yup
          .string()
          .required("Please select a file type category")
          .oneOf(["PDF"], "Invalid category")
      });
  
      const {
      register,
      handleSubmit,
      formState: { errors },
      } = useForm({
          resolver: yupResolver(schema),
      });

      async function submitForm(data) {
        console.log(data);
        
      }
  return (
    <div className="border border-blue-200 p-6 rounded-xl shadow-md">
      <header className="font-bold text-lg">Create New Assignment</header>
      <p className="text-gray-500 mb-5">
        Set up a new assignment with deadline, file requirements, and total
        marks
      </p>
      <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
        <div className="flex flex-col gap-1">
          <label className="font-medium">Assignment Title *</label>
          <input
            {...register("assignmentTitle")}
            placeholder="e.g., Database Design Project"
            type="text"
            className="py-2 px-4 border border-blue-200 rounded-lg"
          />
          {errors.assignmentTitle && (
                    <p className="text-sm text-red-500 font-light">
                        {errors.assignmentTitle.message}
                    </p>
                    )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium">Description *</label>
          <textarea
            {...register("description")}
            placeholder="Provide detailed instructions for the assignment..."
            type="text"
            className="py-2 px-4 border border-blue-200 rounded-lg"
            rows="3"
          />
          {errors.description && (
                    <p className="text-sm text-red-500 font-light">
                        {errors.description.message}
                    </p>
                    )}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="font-medium">Submission Deadline *</label>
            <input
              {...register("submissionDeadline")}
              type="date"
              className="py-2 px-4 border border-blue-200 rounded-lg"
            />
            {errors.submissionDeadline && (
                    <p className="text-sm text-red-500 font-light">
                        {errors.submissionDeadline.message}
                    </p>
                    )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">Total Marks *</label>
            <input
              {...register("totalMarks")}
              defaultValue={0}
              type="number"
              className="py-2 px-4 border border-blue-200 rounded-lg"
            />
            {errors.totalMarks && (
                    <p className="text-sm text-red-500 font-light">
                        {errors.totalMarks.message}
                    </p>
                    )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">Max File Size (MB)</label>
            <input
              {...register("maxFileSize")}
              defaultValue={0}
              type="number"
              className="py-2 px-4 border border-blue-200 rounded-lg"
            />
            {errors.maxFileSize && (
                    <p className="text-sm text-red-500 font-light">
                        {errors.maxFileSize.message}
                    </p>
                    )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">Allowed File Types</label>
            <select 
            {...register("allowedFileTypes")}
            defaultValue=""
            className="py-2 px-4 border border-blue-200 rounded-lg"
            >
                <option value="PDF">PDF</option>
            </select>
            {errors.allowedFileTypes && (
                    <p className="text-sm text-red-500 font-light">
                        {errors.allowedFileTypes.message}
                    </p>
                    )}
          </div>
        </div>
        <div className="bg-blue-200 flex gap-3 border border-blue-300 rounded-lg p-6">
            <span><IoAlertCircleOutline className="text-2xl text-blue-600"/></span>
            <div className="text-blue-900 text-sm">
                <p className="font-bold">Note:</p>
                <p className="">
                A unique token will be generated for students to access this assignment
                </p>
            </div>
        </div>
        <button type="submit" className="text-white py-2 bg-blue-500 hover:bg-blue-600 font-medium w-full rounded-lg">Create Assignment</button>
      </form>
    </div>
  );
}

export default CreateAssignment;
