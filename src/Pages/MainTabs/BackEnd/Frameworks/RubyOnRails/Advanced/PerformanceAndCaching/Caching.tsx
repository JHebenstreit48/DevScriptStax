import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Caching = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/PerformanceAndCaching/Caching';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Caching;
