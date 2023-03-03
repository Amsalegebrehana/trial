<template>
    <div>
        <AdminTopBar role="admin" />
        <div class="flex">
            
            <AdminSideBar pageName="exams" />
            <div class="w-full mx-6">
                
                <h1>ExamId: {{ $route.params.id }}</h1>
                  <h2>Exam detail page</h2>
                </div>
            </div>
        </div>
</template>

<script>
definePageMeta({ middleware: 'is-admin' })
import AdminTopBar from '~~/components/TopBar.vue'
import AdminSideBar from '~~/components/admin/AdminSideBar.vue';
export default {
    components: { AdminSideBar, AdminTopBar },
    name: 'ExamGroupDeatil',
    data() {
        return {
            exams: [
                { "id": "1", "name": "Physics 1990 Ethiopian National Exam", "numberOfQuestions": 45, "status": "ACTIVE", "testingDate": "10:00 AM Dec 12, 1990" },
                { "id": "2", "name": "Chemistry 2000 Ethiopian National Exam", "numberOfQuestions": 80, "status": "INACTIVE", "testingDate": "01:00 PM Dec 12, 1990" },
                { "id": "3", "name": "Biology 2001 Ethiopian National Exam", "numberOfQuestions": 120, "status": "ACTIVE", "testingDate": "10:00 AM Dec 12, 1990" },
                { "id": "2", "name": "Chemistry 2010 Ethiopian National Exam", "numberOfQuestions": 80, "status": "ACTIVE", "testingDate": "10:00 AM Dec 12, 1990" }]
        }

    },
}
</script>