import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TaskLists = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Intermediate/InteractiveFeatures/TaskLists';

  return (
    <>
      <PageLayout>
        <PageTitle title="Task Lists" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TaskLists;
