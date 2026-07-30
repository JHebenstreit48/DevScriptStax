import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Caching = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/PerformanceAndCaching/Caching';

  return (
    <>
      <PageLayout>
        <PageTitle title="Caching" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Caching;
