<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();
        if ($students->count() > 0) {
            return response()->json(
                [
                    'status' => 200,
                    'students' => $students
                ],
                200
            );
        } else {
            return response()->json(
                [
                    'status' => 404,
                    'message' => 'Data Tidak Ada'
                ],
                404
            );
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'nim' => 'required|digits:15',
            'email' => 'required|max:191',
            'phone' => 'required|digits:12',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'error' => $validator->messages()
            ], 422);
        } else {
            $student = Student::create([
                'name' => $request->name,
                'nim' => $request->nim,
                'email' => $request->email,
                'phone' => $request->phone,
            ]);

            if ($student) {
                return response()->json(
                    [
                        'status' => 200,
                        'message' => "Data Mahasiswa berhasil ditambahkan"
                    ],
                    200
                );
            } else {
                return response()->json(
                    [
                        'status' => 404,
                        'message' => "Terjadi Kesalahan!"
                    ],
                    404
                );
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $student = Student::find($id);
        if ($student) {
            return response()->json(
                [
                    'status' => 200,
                    'student' => $student
                ],
                200
            );
        } else {
            return response()->json(
                [
                    'status' => 404,
                    'message' => "Data tidak ditemukan"
                ],
                404
            );
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'nim' => 'required|digits:15',
            'email' => 'required|max:191',
            'phone' => 'required|digits:12',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'error' => $validator->messages()
            ], 422);
        } else {
            $student = Student::find($id);

            if ($student) {
                $student->update([
                    'name' => $request->name,
                    'nim' => $request->nim,
                    'email' => $request->email,
                    'phone' => $request->phone,
                ]);

                return response()->json(
                    [
                        'status' => 200,
                        'message' => "Data Mahasiswa berhasil diubah"
                    ],
                    200
                );
            } else {
                return response()->json(
                    [
                        'status' => 404,
                        'message' => "Data mahasiswa tidak ada!"
                    ],
                    404
                );
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $student = Student::find($id);
        if ($student) {
            $student->delete();

            return response()->json([
                'status' => 404,
                'message' => "Data berhasil dihapus"
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => "Data tidak ada",
            ], 404);
        }
    }
}
