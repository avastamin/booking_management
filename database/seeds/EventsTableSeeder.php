<?php

use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->insert([
            'name' => str_random(10),
            'email' => str_random(10).'@gmail.com',
            'title' => str_random(10),
            'description' => str_random(100),
        ]);
    }
}
