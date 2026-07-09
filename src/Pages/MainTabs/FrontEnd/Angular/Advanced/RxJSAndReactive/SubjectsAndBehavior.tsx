import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SubjectsAndBehavior = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/RxJSAndReactive/SubjectsAndBehavior';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Advanced - Subjects and Behaviors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SubjectsAndBehavior;