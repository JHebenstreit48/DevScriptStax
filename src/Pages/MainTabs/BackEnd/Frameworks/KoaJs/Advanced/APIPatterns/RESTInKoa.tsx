import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RESTInKoa = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/APIPatterns/RESTInKoa';

  return (
    <>
      <PageLayout>
        <PageTitle title="REST in Koa" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTInKoa;
