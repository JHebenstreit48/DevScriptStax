import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CachingAndSpeed = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Performance/CachingAndSpeed';

  return (
    <>
      <PageLayout>
        <PageTitle title="Caching & Speed" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndSpeed;
