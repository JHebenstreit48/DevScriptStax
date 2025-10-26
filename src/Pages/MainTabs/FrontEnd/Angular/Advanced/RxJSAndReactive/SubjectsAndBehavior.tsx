import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SubjectsAndBehavior = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/RxJSAndReactive/SubjectsAndBehavior';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Advanced - Subjects and Behaviors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SubjectsAndBehavior;
