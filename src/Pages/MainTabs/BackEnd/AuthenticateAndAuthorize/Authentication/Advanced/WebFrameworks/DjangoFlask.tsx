import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DjangoFlask = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/DjangoFlask';

  return (
    <>
      <PageLayout>
        <PageTitle title="Django / Flask" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DjangoFlask;
