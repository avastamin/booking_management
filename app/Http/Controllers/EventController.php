<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;

class EventController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Event::get());
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return response()->json(Event::where('id',$id)->first());
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $event = new Event();
        $event->name = $request->input('name');
        $event->email = $request->input('email');
        $event->title = $request->input('title');
        $event->start_time = $request->input('startdate');
        if($request->input('enddate')){
            $event->end_time = $request->input('enddate');
        } else{
            $event->end_time = null;
        }
        $event->save();
        return response()->json(['response:' => array(
            'message:' => 'Events Created.',
            'type:' => 'success'
        )], 200);
    }

    public function update(Request $request, $id)
    {
        $event = Event::find($id);
        $event->name = $request->input('name');
        $event->email = $request->input('email');
        $event->title = $request->input('title');
        $event->start_time = $request->input('startdate');
        if($request->input('enddate')){
            $event->end_time = $request->input('enddate');
        } else{
            $event->end_time = null;
        }
        $event->save();
        return response()->json(['response:' => array(
            'message:' => 'Events Updated.',
            'type:' => 'success'
        )], 200);
    }
    public function destroy($id)
    {
        $event = Event::find($id);
        $event->delete();

        return response()->json(['response:' => array(
            'message:' => 'Events Deleted.',
            'type:' => 'success'
        )], 200);
    }

}
