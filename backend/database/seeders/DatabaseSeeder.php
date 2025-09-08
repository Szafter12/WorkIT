<?php

namespace Database\Seeders;

use App\Models\Abilities;
use App\Models\City;
use App\Models\Companies;
use App\Models\CompanyAddress;
use App\Models\ContractType;
use App\Models\JobLevel;
use App\Models\JobRequirements;
use App\Models\JobResponsibilities;
use App\Models\Languages;
use App\Models\PostAbility;
use App\Models\Posts;
use App\Models\PostSpecializations;
use App\Models\Specializations;
use App\Models\User;
use App\Models\UserAddress;
use App\Models\UserEducation;
use App\Models\UserLanguage;
use App\Models\UserSocialLinks;
use App\Models\UserWork;
use App\Models\WorkDimension;
use App\Models\WorkMode;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $abilities = [
            'Assembly Language',
            'AWS',
            'Azure',
            'C#',
            'C++',
            'CSS',
            'Dart',
            'Docker',
            'Git',
            'Go',
            'Google Cloud',
            'Haskell',
            'HTML',
            'Java',
            'JavaScript',
            'Kotlin',
            'Lua',
            'MATLAB',
            'NoSQL',
            'Objective-C',
            'Perl',
            'PHP',
            'PowerShell',
            'Python',
            'R',
            'Ruby',
            'Rust',
            'Scala',
            'Shell Scripting',
            'SQL',
            'Swift',
            'TypeScript',
            'VHDL'
        ];

        $cities = [
            'Warszawa' => '00-001',
            'Kraków' => '30-001',
            'Łódź' => '90-001',
            'Wrocław' => '50-001',
            'Poznań' => '60-001',
            'Gdańsk' => '80-001',
            'Szczecin' => '70-001',
            'Bydgoszcz' => '85-001',
            'Lublin' => '20-001',
            'Katowice' => '40-001',
            'Gdynia' => '81-001',
            'Czestochowa' => '42-200',
            'Radom' => '26-600',
            'Toruń' => '87-100',
            'Zielona Góra' => '65-001',
            'Opole' => '45-001',
            'Rzeszów' => '35-001',
            'Białystok' => '15-001',
            'Gorzów Wielkopolski' => '66-400',
            'Dąbrowa Górnicza' => '41-300',
            'Sosnowiec' => '41-200'
        ];

        $specializations = [
            'Frontend Developer',
            'Backend Developer',
            'Fullstack Developer',
            'DevOps Engineer',
            'Data Scientist',
            'Machine Learning Engineer',
            'Mobile Developer',
            'Game Developer',
            'Security Specialist',
            'Cloud Engineer',
            'Database Administrator',
            'System Administrator',
            'Network Engineer',
            'QA Engineer',
            'UI/UX Designer'
        ];

        $responsibilities = [
            'Zarządzanie serwerami i infrastrukturą IT',
            'Rozbudowa istniejących aplikacji webowych',
            'Tworzenie dokumentacji technicznej',
            'Wdrażanie nowych funkcjonalności',
            'Utrzymanie bezpieczeństwa systemów',
            'Optymalizacja wydajności aplikacji',
            'Przeprowadzanie code review',
            'Integracja z zewnętrznymi API',
            'Automatyzacja procesów wdrożeniowych',
            'Rozwiązywanie zgłoszeń użytkowników',
            'Testowanie oprogramowania',
            'Tworzenie testów jednostkowych',
            'Zarządzanie bazami danych',
            'Monitorowanie działania aplikacji',
            'Współpraca z zespołem projektowym',
            'Udział w spotkaniach SCRUM',
            'Analiza wymagań biznesowych',
            'Projektowanie architektury systemu',
            'Migracja danych',
            'Wdrażanie poprawek bezpieczeństwa',
            'Utrzymanie ciągłości działania usług',
            'Tworzenie narzędzi developerskich',
            'Szacowanie czasu realizacji zadań',
            'Wspieranie młodszych członków zespołu',
            'Udział w przeglądach architektury',
            'Zarządzanie repozytorium kodu',
            'Utrzymanie środowisk testowych',
            'Tworzenie i aktualizacja pipeline CI/CD',
            'Rozwijanie aplikacji mobilnych',
            'Przeprowadzanie szkoleń technicznych',
        ];

        $requirements = [
            'Minimum 2 lata doświadczenia na podobnym stanowisku',
            'Znajomość języka PHP',
            'Doświadczenie z frameworkiem Laravel',
            'Umiejętność pracy z bazami danych MySQL',
            'Znajomość systemów kontroli wersji Git',
            'Doświadczenie w pracy z REST API',
            'Umiejętność pracy w zespole',
            'Znajomość języka angielskiego na poziomie komunikatywnym',
            'Doświadczenie z Dockerem',
            'Znajomość JavaScript i frameworków frontendowych',
            'Umiejętność analitycznego myślenia',
            'Doświadczenie w pracy w metodyce Agile/SCRUM',
            'Znajomość narzędzi CI/CD',
            'Umiejętność rozwiązywania problemów',
            'Doświadczenie w testowaniu oprogramowania',
            'Znajomość zagadnień bezpieczeństwa IT',
            'Umiejętność pracy pod presją czasu',
            'Doświadczenie z systemami Linux',
            'Znajomość architektury mikroserwisów',
            'Umiejętność tworzenia dokumentacji technicznej',
            'Doświadczenie w pracy z chmurą (AWS, Azure lub GCP)',
            'Znajomość TypeScript',
            'Umiejętność projektowania baz danych',
            'Doświadczenie w integracji z zewnętrznymi usługami',
            'Znajomość narzędzi do monitoringu aplikacji',
            'Umiejętność prowadzenia szkoleń technicznych',
            'Doświadczenie w optymalizacji wydajności aplikacji',
            'Znajomość narzędzi do automatyzacji testów',
            'Umiejętność pracy z dużymi zbiorami danych',
            'Gotowość do ciągłego podnoszenia kwalifikacji',
        ];

        foreach ($abilities as $ability) {
            Abilities::factory()->create(['ability_name' => $ability]);
        }

        foreach ($cities as $city => $postal_code) {
            City::factory()->create(['city' => $city, 'postal_code' => $postal_code]);
        }

        ContractType::factory()
            ->sequence(
                ['contract_name' => 'B2B'],
                ['contract_name' => 'Umowa o dzieło'],
                ['contract_name' => 'Umowa o pracę'],
                ['contract_name' => 'Umowa o staż'],
                ['contract_name' => 'Umowa zlecenie']
            )
            ->count(5)
            ->create();

        JobLevel::factory()
            ->sequence(
                ['level' => 'Intern'],
                ['level' => 'Junior'],
                ['level' => 'Mid'],
                ['level' => 'Senior'],
                ['level' => 'Lead'],
            )
            ->count(5)
            ->create();

        Languages::factory()
            ->sequence(
                ['language' => 'Polski'],
                ['language' => 'Angielski'],
                ['language' => 'Niemiecki'],
                ['language' => 'Hiszpański'],
                ['language' => 'Francuski'],
                ['language' => 'Włoski'],
                ['language' => 'Rosyjski'],
                ['language' => 'Chiński'],
                ['language' => 'Japoński'],
                ['language' => 'Koreański']
            )
            ->count(10)
            ->create();

        foreach ($specializations as $specialization) {
            Specializations::factory()->create(['specialization' => $specialization]);
        }

        WorkDimension::factory()
            ->sequence(
                ['work_dimension_name' => 'Pełny etat'],
                ['work_dimension_name' => 'Część etatu'],
                ['work_dimension_name' => 'Praktyki'],
                ['work_dimension_name' => 'Wolontariat']
            )
            ->count(4)
            ->create();

        WorkMode::factory()
            ->sequence(
                ['work_mode_name' => 'Zdalna'],
                ['work_mode_name' => 'Hybrydowa'],
                ['work_mode_name' => 'Stacjonarna']
            )
            ->count(3)
            ->create();

        $companies = Companies::factory()->count(5)->create();
        
        foreach ($companies as $company) {
            CompanyAddress::factory()->create([
                'company_id' => $company->id,
            ]);
        }

        $users = User::factory()->count(3)->create();

        foreach ($users as $user) {
            $randomNumber = mt_rand(5, 10);
            $randomAbility = collect($abilities)->random($randomNumber);

            UserAddress::factory()->create([
                'user_id' => $user->id,
            ]);

            UserEducation::factory()->create([
                'user_id' => $user->id,
            ]);

            UserLanguage::factory()->create([
                'user_id' => $user->id,
            ]);

            UserSocialLinks::factory()->create([
                'user_id' => $user->id,
            ]);

            UserWork::factory()->create([
                'user_id' => $user->id,
            ]);
        }

        $posts = Posts::factory(100)->create();

        foreach ($posts as $post) {
            $randomNumber = mt_rand(5, 10);

            $randomAbility = collect($abilities)->random($randomNumber);
            $randomSpecialization = collect($specializations)->random(1);

            $randomRequirements = collect($requirements)->random($randomNumber);
            $randomResponsibilities = collect($responsibilities)->random($randomNumber);

            foreach ($randomAbility as $ability) {
                PostAbility::factory()->create([
                    'post_id' => $post->id,
                    'ability_id' => Abilities::where('ability_name', "=", $ability)->first()->id
                ]);
            }

            foreach ($randomRequirements as $requirement) {
                JobRequirements::factory()->create([
                    "post_id" => $post->id,
                    "requirement" => $requirement
                ]);
            }

            foreach ($randomResponsibilities as $responsibility) {
                JobResponsibilities::factory()->create([
                    'post_id' => $post->id,
                    'responsibility' => $responsibility
                ]);
            }

            PostSpecializations::factory()->create([
                'post_id' => $post->id,
                'specialization_id' => Specializations::where("specialization", "=", $randomSpecialization[0])->first()->id
            ]);
        }
    }
}
