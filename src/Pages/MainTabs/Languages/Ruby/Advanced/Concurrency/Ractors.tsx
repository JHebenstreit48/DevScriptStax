import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Ractors = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/Concurrency/Ractors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ractors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Ractors;
