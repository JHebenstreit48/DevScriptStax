import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SubjectsBehavior = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/RxJSAndReactiveProgramming/SubjectsBehavior';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Subjects/Behavior" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SubjectsBehavior;
