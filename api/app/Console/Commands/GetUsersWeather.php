<?php

namespace App\Console\Commands;

use App\Jobs\GetUsersWeatherJob;
use Illuminate\Console\Command;
use Illuminate\Console\Scheduling\Schedule;

class GetUsersWeather extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get-users-weather';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Get all user's weather in a external API";

    /**
     * Execute the console command.
     */
    public function handle(Schedule $schedule): void
    {
        $schedule->job(new GetUsersWeatherJob)->hourly();
    }
}
