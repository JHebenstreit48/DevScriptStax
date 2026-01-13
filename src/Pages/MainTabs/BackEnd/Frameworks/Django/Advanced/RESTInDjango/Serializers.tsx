import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Serializers = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Advanced/RESTInDjango/Serializers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Serializers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Serializers;
