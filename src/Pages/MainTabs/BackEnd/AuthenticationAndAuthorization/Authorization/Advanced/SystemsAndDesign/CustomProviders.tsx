import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomProviders = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Advanced/SystemsAndDesign/CustomProviders';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Providers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomProviders;
