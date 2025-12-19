import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TaskLists = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Intermediate/InteractiveFeatures/TaskLists';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Task Lists" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TaskLists;
