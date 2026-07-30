import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Caching = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Performance/Caching';

  return (
    <>
      <PageLayout>
        <PageTitle title="Caching (Flask-Caching)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Caching;
